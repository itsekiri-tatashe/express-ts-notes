import express from "express";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import cors from "cors";

// Routes
import productsRoutes from "./routes/products.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { swaggerSpec } from "./config/swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Health
app.get("/health", (req, res) => {
  res.json({ message: "Server running healthy" });
});

// CORS
app.use(
  cors({
    origin: "*", // or "http://localhost:3000"
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Swagger Doc
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.use("/products", productsRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT:${PORT}`);
});
