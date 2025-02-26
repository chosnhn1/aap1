import express from "express";
import {getProducts, updateProduct, deleteProduct, createProduct} from "../controllers/product.controller.js";

const router = express.Router();

// Product CRUD
router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;


