import { Request, Response, NextFunction } from "express";

// Services
import * as productService from "../services/productService.js";

// GET /products
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await productService.getAllProducts();

    res.json({
      message: "Prodcts retrieved successfully!",
      data: products,
      count: products.length,
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
) => {
  try {
    const productId = req.params["id"]!;

    const product = await productService.getProductbyId(productId);
    console.log(product);
    if (!product) {
      return res.status(404).json({
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

    // Simple validation (we'll add Zod later)
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Name and price are required",
      });
    }

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

// export const updateProduct = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const productId = req.params["id"];
//   try{

//   }
//   res.json({ message: `ProductUpdate Endpoint: ${productId}` });
// };

export function deleteProduct(req: Request, res: Response) {
  const productId = req.params["id"];
  res.json({ message: `ProductDelete Endpoint: ${productId}` });
}
