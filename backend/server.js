import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// load .env
dotenv.config();

// init
const app = express();

// setting for use json
app.use(express.json());

app.use("/api/products", productRoutes);

// index
app.get("/", (request, response) => {
  response.send("Server available.")
})



// init backend
app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});