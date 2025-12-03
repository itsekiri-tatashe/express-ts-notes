import { desc } from "drizzle-orm";
import { db } from "../db/index.js";
import { NewProduct, Product, productsTable } from "../db/products.schema.js";

// Get All Products
export const getAllProducts = async (): Promise<Product[]> => {
  return await db.select().from(productsTable).orderBy(desc(productsTable.id));
};

// Create Product
export const createProduct = async (
  data: NewProduct
): Promise<Product | undefined> => {
  const [product] = await db.insert(productsTable).values(data).returning();
  return product;
};
