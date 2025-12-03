import { Router } from "express";
import * as productController from "../controllers/productController.js";

const router = Router();

router.get("/", productController.getAllProducts);

// router.get("/:id", getProductById);

router.post("/", productController.createProduct);

// router.put("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

export default router;
