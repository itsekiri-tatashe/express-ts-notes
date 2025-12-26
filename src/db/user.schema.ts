import { text, uuid, varchar } from "drizzle-orm/pg-core";
import { mySchema } from "./product.schema";

// Users Table
export const usersTable = mySchema.table("users", {
  id: uuid().defaultRandom().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: varchar({ length: 255 }).notNull().default("user"),

  name: varchar({ length: 255 }).notNull(),
  address: text(),
});
