import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router();
router.get("/products", ProductControllers.getProduct);
router.post("/products/create-product", ProductControllers.createProduct);
router.delete("/products/:id", ProductControllers.deleteProduct);
router.patch("/products/:id", ProductControllers.updateProduct);
export const ProductsRoutes = router;
