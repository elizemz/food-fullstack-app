import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = req.body;

    res.status(201).json({ message: "Food successfully created." });
  } catch (error) {
    next(error);
  }
};
