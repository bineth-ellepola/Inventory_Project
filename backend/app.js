import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import labelRoutes from "./routes/labelRoute.js";
import chemicalRoutes from "./routes/chemicalRoute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/labels", labelRoutes);
app.use("/api/chemicals", chemicalRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));



app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
