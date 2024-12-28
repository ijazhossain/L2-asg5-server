import { z } from "zod";
import { UserStatus } from "./user.constant";

const createUserValidationSchema = z.object({
  name: z.string().max(20).optional(),
  email: z.string().email(),
  password: z
    .string({
      invalid_type_error: "Password must be string",
    })
    .max(20, { message: "Password can not be more than 20 characters" })
    .optional(),
  status: z.enum([...UserStatus] as [string, ...string[]]),
});
export const UserValidation = {
  createUserValidationSchema,
};
