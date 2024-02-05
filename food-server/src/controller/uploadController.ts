import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user";
import { sendEmail } from "../utils/sendEmail";
import errorHandler from "../middlewear/errorHandler";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("File", req.file);
    const result = await cloudinary.uploader.upload(req.file?.path!);

    res.send("ok => " + result.secure_irl);
  } catch (error) {
    next(error);
  }
};
