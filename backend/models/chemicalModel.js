import mongoose from "mongoose";

const chemicalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    type: { type: String, required: true },
  },
  { timestamps: true } // This automatically adds createdAt & updatedAt
);

export default mongoose.model("Chemical", chemicalSchema);

