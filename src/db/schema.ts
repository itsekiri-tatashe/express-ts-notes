import {
  doublePrecision,
  integer,
  pgSchema,
  pgTable,
  text,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const mySchema = pgSchema("ecommerce");

// Products Table
export const productsTable = mySchema.table("products", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
  quantity: integer().default(0),
});
