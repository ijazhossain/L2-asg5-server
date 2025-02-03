import { Model } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "superAdmin" | "admin" | "manager" | "buyer";
  needsPasswordChange: boolean;
  status: "in-progress" | "blocked";
  isDeleted: boolean;
  passwordChangedAt: Date;
};
export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jetIssuedTimestamp: number
  ): boolean;
}
