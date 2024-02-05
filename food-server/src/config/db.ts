import mongoose from "mongoose";
import color from "colors";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log(color.bgBlue("Database is connected."));
  } catch (error) {
    console.log(color.bgRed("Failed to connect."));
  }
};
