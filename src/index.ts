import express from "express";

// 3PL
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

// Other Imports
import productsRoutes from "./routes/product.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middleware/errorHandler.middleware";
import { swaggerSpec } from "./config/swagger";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// 3PL
const db = drizzle(process.env.DATABASE_URL!);

/*
  Middleware
*/
app.use(express.json());
app.use(morgan("dev")); // Logger
app.use(errorHandler); // Error Handler
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec)); // Swagger Doc
// CORS
app.use(
  cors({
    origin: "*", // or "http://localhost:3000"
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* Routes */
app.get("/health", (req, res) => {
  res.json({ message: "Server running healthy" });
});
app.use("/products", productsRoutes);
app.use("/auth", authRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT:${PORT}`);
});
