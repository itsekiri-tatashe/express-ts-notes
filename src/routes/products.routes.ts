import { Router } from "express";
import * as productController from "../controllers/productController.js";

// Request Validation Middleware
import { validate } from "../middleware/validateHandler.js";
import {
  createProductSchema,
  getProductByIdSchema,
  updateProductSchema,
} from "../validators/productValidators.js";

const router = Router();

router.get("/", productController.getAllProducts);

router.get(
  "/:id",
  validate(getProductByIdSchema),
  productController.getProductById
);

router.post(
  "/",
  validate(createProductSchema),
  productController.createProduct
);

router.put(
  "/:id",
  validate(updateProductSchema),
  productController.updateProduct
);

// router.delete("/:id", deleteProduct);

export default router;
