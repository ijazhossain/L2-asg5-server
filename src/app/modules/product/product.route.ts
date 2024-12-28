import { Router } from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidations } from "./product.validation";

const router = Router();
router.get("/", ProductControllers.getProduct);
router.post(
  "/create-product",
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct
);
router.delete("/product/:id", ProductControllers.deleteProduct);
router.patch(
  "/product/:id",
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateProduct
);
export const ProductsRoutes = router;
