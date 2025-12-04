import { Router } from "express";
import * as productController from "../controllers/productController.js";

// Request Validation Middleware
import { validate } from "../middleware/validateHandler.js";
import { getProductByIdSchema } from "../validators/productValidators.js";

const router = Router();

router.get("/", productController.getAllProducts);

router.get(
  "/:id",
  validate(getProductByIdSchema),
  productController.getProductById
);

router.post("/", productController.createProduct);

// router.put("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

export default router;
