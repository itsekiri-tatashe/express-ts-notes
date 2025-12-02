import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is Running" });
});

app.get("/estates", (req, res) => {
  res.json({
    message: "Estates retrieved successfully!",
    estates: {
      1: "Dolphin Estate",
      2: "Second Avenue Estate",
      3: "Parkview Estate",
    },
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
