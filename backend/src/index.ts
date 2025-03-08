import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("🚀 CloudTime Backend API is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
