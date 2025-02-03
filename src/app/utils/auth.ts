import { NextFunction, Request, Response } from "express";
import catchAsync from "./catchAsync";
import AppError from "../errors/AppError";
import status from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modules/user/user.model";
const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(status.UNAUTHORIZED, "You are not authorized");
    }
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as JwtPayload;
    } catch (error) {
      throw new AppError(status.UNAUTHORIZED, "Unauthorized access!");
    }
    const { role, email, iat } = decoded;
    // check if the user exist or not
    const user = await User.isUserExistsByEmail(email);
    if (!user) {
      throw new AppError(status.NOT_FOUND, "This user is not found");
    }
    // checking if the user is already deleted
    const isDeleted = user?.isDeleted;
    if (isDeleted) {
      throw new AppError(status.FORBIDDEN, "This user is deleted!");
    }
    // checking if the user is blocked
    const userStatus = user?.status;
    if (userStatus === "blocked") {
      throw new AppError(status.FORBIDDEN, "This user is blocked!");
    }
    // check the jwt issue before password change
  });
};
