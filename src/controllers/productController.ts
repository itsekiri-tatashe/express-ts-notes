import { Request, Response, NextFunction } from "express";

// Services
import * as productService from "../services/productService";

// GET /products
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await productService.getAllProducts();

    res.json({
      message: "Products retrieved successfully!",
      total: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// GET /products/:id
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productId = req.params["id"]!;

    const product = await productService.getProductbyId(productId);
    if (!product) {
      res.status(404).json({
        message: "Product does not exist",
      });
    }

    res.json({
      message: "Product retrieved successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// POST /products
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, image, price, quantity } = req.body;

    const product = await productService.createProduct({
      name,
      description,
      image,
      price,
      quantity,
    });

    res.status(201).json({
      data: product,
      message: "Product created successfully",
    });
  } catch (error) {
    next(error);
  }
};

// PUT /products/:id
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productId = req.params["id"]!;
    const payload = req.body;

    // Check if product exists
    const existingProduct = await productService.getProductbyId(productId);
    if (!existingProduct) {
      res.status(404).json({
        message: "Product does not exist",
      });
    }

    // Update product
    const product = await productService.updateProduct(productId, payload);

    res.json({ message: "Product updated successfully", data: product });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productId = req.params["id"]!;

    // Check if product exists
    const existingProduct = await productService.getProductbyId(productId);
    if (!existingProduct) {
      res.status(404).json({
        message: "Product does not exist",
      });
    }

    // Delete product
    const product = await productService.deleteProduct(productId);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
