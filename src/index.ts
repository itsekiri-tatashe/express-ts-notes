import express from "express";

// 3PL
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

// Routes
import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// 3PL
const db = drizzle(process.env.DATABASE_URL!);

// Middleware
app.use(express.json());

// Routes
app.get("/health", (req, res) => {
  res.json({ message: "Server running healthy" });
});
app.use("/products", productsRoutes);
app.use("/auth", authRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT:${PORT}`);
});
