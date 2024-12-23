import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getProductFromDB = async () => {
  const result = await Product.find();
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload);
  return result;
};
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate({ _id: id });
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
