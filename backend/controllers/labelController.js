
import Label from "../models/labelModel.js";

// Add new item
export const addItem = async (req, res) => {
  try {
    const { name, quantity, type } = req.body;

    const newItem = new Label({
      name,
      quantity,
      type,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update item quantity (add to existing quantity)
export const updateItemQuantity = async (req, res) => {
  try {
    const { id } = req.params; // Item ID
    const { quantity } = req.body;
     // Quantity to add

    const item = await Label.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Add the new quantity to existing quantity
    item.quantity += quantity;

    const updatedItem = await item.save(); // updatedAt updates automatically
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reduce item quantity (subtract from existing quantity)
export const reduceItemQuantity = async (req, res) => {
  try {
    const { id } = req.params; // Item ID
    const { quantity } = req.body; // Quantity to reduce

    const item = await Label.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (quantity > item.quantity) {
      return res.status(400).json({ message: "Quantity to reduce exceeds current stock" });
    }

    // Subtract the quantity
    item.quantity -= quantity;

    const updatedItem = await item.save(); // updatedAt updates automatically
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Label.find().sort({ updatedAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
