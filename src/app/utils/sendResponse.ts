import { Response } from "express";
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
  message?: string;
  data: T;
};
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  return res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    message: data?.message,
    meta: data?.meta,
    data: data?.data,
  });
};
export default sendResponse;
