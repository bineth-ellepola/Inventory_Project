import express from "express";
import {
  addItem,
  updateItemQuantity,
  getAllItems,
  reduceItemQuantity,
} from "../controllers/labelController.js";

const router = express.Router();

// Routes
router.post("/add", addItem);                  // Add new item
router.put("/update/:id", updateItemQuantity); // Update quantity by ID
router.get("/all", getAllItems);              // Get all items
router.put("/reduce/:id", reduceItemQuantity); // Reduce quantity by ID

export default router;
