import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import catchAsync from "../../utils/catchAsync";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Product is created successfully",
    data: result,
  });
});
const getProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getProductFromDB();
  res.status(200).json({
    success: true,
    message: "Product is retrieved successfully",
    data: result,
  });
});
const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ProductServices.deleteProductFromDB(id);
  res.status(200).json({
    success: true,
    message: "Product is deleted successfully",
    data: result,
  });
});
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.updateProductIntoDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "Product is updated successfully",
    data: result,
  });
});
export const ProductControllers = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
