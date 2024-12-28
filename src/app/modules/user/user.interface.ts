export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "superAdmin" | "admin" | "manager" | "buyer";
  needsPasswordChange: boolean;
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};
