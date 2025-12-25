import {
  doublePrecision,
  integer,
  pgSchema,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// Schema
export const mySchema = pgSchema("ecommerce");

// Products Table
export const productsTable = mySchema.table("products", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
  quantity: integer().default(0),
  brand: varchar({ length: 255 }),
});

// Export types for this table
export type Product = typeof productsTable.$inferSelect;
export type NewProduct = typeof productsTable.$inferInsert;
