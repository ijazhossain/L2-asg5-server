import { Router } from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidations } from "./product.validation";

const router = Router();
router.get("/products", ProductControllers.getProduct);
router.post(
  "/products/create-product",
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct
);
router.delete("/products/:id", ProductControllers.deleteProduct);
router.patch(
  "/products/:id",
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateProduct
);
export const ProductsRoutes = router;
