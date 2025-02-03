import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import status from "http-status";
const createUserIntoDB = async (payload: TUser) => {
  // console.log({ payload });
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(status.BAD_REQUEST, "User already exists");
  }

  payload.password = payload.password || (config.default_pass as string);

  const result = await User.create(payload);
  return result;
};
export const UserServices = {
  createUserIntoDB,
};
