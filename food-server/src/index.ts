import express, { Application } from "express";
import color from "colors";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import { connectDB } from "./config/db";
import authRoutes from "./routes/authRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import foodRoutes from "./routes/foodRoutes";
import userRoutes from "./routes/userRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import verifyRoutes from "./routes/verifyRoutes";
import errorHandler from "./middleware/errorHandler";

const MONGO_URI = process.env.MONGO_URI as string;

const PORT = process.env.PORT;

const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/category", categoryRoutes);
app.use("/food", foodRoutes);
app.use("/users", userRoutes);
app.use("/verify", verifyRoutes);
app.use("/upload", uploadRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(color.bgBlue("Server is running,")));
