import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "ProductList Endpoint" });
});

router.get("/:id", (req, res) => {
  const productId = req.params["id"];
  res.json({ message: `ProductView Endpoint: ${productId}` });
});

router.post("/", (req, res) => {
  res.json({ message: "Create Product Endpoint" });
});

export default router;
