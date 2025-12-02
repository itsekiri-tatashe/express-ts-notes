import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.json({ message: "ProductList Endpoint" });
}

export function getProductById(req: Request, res: Response) {
  const productId = req.params["id"];
  res.json({ message: `ProductView Endpoint: ${productId}` });
}

export function createProduct(req: Request, res: Response) {
  const payload = req.body;
  console.log(payload);
  res.json({ message: "Product added successfully!", product: payload });
}

export function updateProduct(req: Request, res: Response) {
  const productId = req.params["id"];
  res.json({ message: `ProductUpdate Endpoint: ${productId}` });
}

export function deleteProduct(req: Request, res: Response) {
  const productId = req.params["id"];
  res.json({ message: `ProductDelete Endpoint: ${productId}` });
}
