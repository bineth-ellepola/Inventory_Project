import mongoose from "mongoose";

const packingmaterialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
  },
  { timestamps: true } // This automatically adds createdAt & updatedAt
);

export default mongoose.model("PackingMaterial", packingmaterialSchema);
