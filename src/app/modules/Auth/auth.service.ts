import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from "jsonwebtoken";
import status from "http-status";
const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload?.email);
  if (!user) {
    throw new AppError(status.NOT_FOUND, "User does not found!");
  }
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(status.NOT_FOUND, "This user is deleted!");
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(
    { email: user.email },
    config.jwt_access_secret as string,
    { expiresIn: config.jwt_access_expires_in }
  );
};
export const AuthServices = {
  loginUser,
};
