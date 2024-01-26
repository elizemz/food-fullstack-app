import express, { Application, Request, Response } from "express";
import color from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import verifyRoutes from "./routes/verifyRoutes";

const MONGO_URI = process.env.MONGO_URI as string;

const PORT = process.env.PORT;

const app: Application = express();

connectDB(MONGO_URI);

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/verify", verifyRoutes);

app.listen(PORT, () => console.log(color.rainbow("Server is running")));
