import express from "express";
import dotenv from "dotenv";

// Routes
import productsRoutes from "./routes/productsRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ message: "Server running healthy" });
});

app.use("/products", productsRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
