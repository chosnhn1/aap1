import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// load .env
dotenv.config();

// init; default PORT fallbacks to 5000
const app = express();
const PORT = process.env.PORT || 5000;

// setting for use json
app.use(express.json());

app.use("/api/products", productRoutes);

// index
app.get("/", (request, response) => {
  response.send("Server available.")
})



// init backend
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});