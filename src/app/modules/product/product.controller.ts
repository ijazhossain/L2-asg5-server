import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProductIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductFromDB();
    res.status(200).json({
      success: true,
      message: "Product is retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await ProductServices.deleteProductFromDB(id);
    res.status(200).json({
      success: true,
      message: "Product is deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await ProductServices.updateProductIntoDB(id, req.body);
    res.status(200).json({
      success: true,
      message: "Product is updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
export const ProductControllers = {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
