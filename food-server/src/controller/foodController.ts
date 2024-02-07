import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user";
import { sendEmail } from "../utils/sendEmail";
import errorHandler from "../middleware/errorHandler";
import MyError from "../utils/myError";
import Food from "../model/food";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFood = req.body;
    await Food.create({ ...req.body });

    res.status(201).json({ message: "Food successfully created." });
  } catch (error) {
    next(error);
  }
};

export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findById(foodId);

    if (!food) {
      throw new MyError(`Food with that id could not be found.`, 400);
    }

    res.status(200).json({
      message: `Food with the id ${foodId} has been found.`,
      food,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foods = await Food.find().populate("category", "_id name");

    res.status(201).json({ message: "Found all foods.", foods });
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const updateFood = req.body;

    const food = await Food.findByIdAndUpdate(foodId, updateFood);

    if (!food) {
      throw new MyError(`Food with that id could not be updated.`, 400);
    }

    res.status(200).json({
      message: `Food with the id ${foodId} has been updated.`,
      food,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findByIdAndDelete(foodId);

    if (!food) {
      throw new MyError(
        `Food with that id could not be found, so it cannot be deleted.`,
        400
      );
    }

    res.status(200).json({
      message: `Deleted the food with the id ${foodId}.`,
      food,
    });
  } catch (error) {
    next(error);
  }
};
