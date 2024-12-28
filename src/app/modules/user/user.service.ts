import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already exists");
  }
  const isUserDeleted = user.isDeleted;
  if (isUserDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, "User is deleted");
  }
  const userStatus = user.status;
  if (userStatus === "blocked") {
    throw new AppError(httpStatus.BAD_REQUEST, "User is blocked");
  }
  payload.password = payload.password || (config.default_pass as string);

  const result = await User.create();
};
export const UserServices = {
  createUserIntoDB,
};
