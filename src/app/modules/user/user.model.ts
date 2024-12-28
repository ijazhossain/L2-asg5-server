import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
  },
  needsPasswordChange: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ["superAdmin", "admin", "manager", "buyer"],
    default: "buyer",
  },
  status: {
    type: String,
    enum: ["in-progress", "blocked"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
export const User = model<TUser>("User", userSchema);
