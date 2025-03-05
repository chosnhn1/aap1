import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// load .env
dotenv.config();

// init; default PORT fallbacks to 5000
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// setting for use json
app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// index
app.get("/", (request, response) => {
  response.send("Server available.")
})



// init backend
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});