import { desc, eq } from "drizzle-orm";
import { db } from "../db/index";
import { NewProduct, Product, productsTable } from "../db/product.schema";

// Get All Products
export const getAllProducts = async (): Promise<Product[]> => {
  return await db.select().from(productsTable).orderBy(desc(productsTable.id));
};

// Get Single Product By ID
export const getProductbyId = async (
  id: string
): Promise<Product | undefined> => {
  const product = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, id))
    .limit(1);

  return product[0];
};

// Create Product
export const createProduct = async (
  data: NewProduct
): Promise<Product | undefined> => {
  const [product] = await db.insert(productsTable).values(data).returning();
  return product;
};

// Edit Product
export const updateProduct = async (
  id: string,
  data: Partial<Product>
): Promise<Product | undefined> => {
  const result = await db
    .update(productsTable)
    .set({ ...data })
    .where(eq(productsTable.id, id))
    .returning();

  return result[0];
};

// Delete a Product
export const deleteProduct = async (id: string): Promise<boolean> => {
  const result = await db
    .delete(productsTable)
    .where(eq(productsTable.id, id))
    .returning();

  return result.length > 0;
};
