import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user";
import { sendEmail } from "../utils/sendEmail";
import errorHandler from "../middlewear/errorHandler";
import MyError from "../utils/myError";
import Category from "../model/category";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCategory = req.body;
    await Category.create({ ...req.body });

    res.status(201).json({ message: "Category successfully created." });
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);

    if (!category) {
      throw new MyError(`Category with that id could not be found.`, 400);
    }

    res.status(200).json({
      message: `Category with the id ${categoryId} has been found.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();

    res.status(201).json({ message: "Found all categories.", categories });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const updateCategory = req.body;

    const category = await Category.findByIdAndUpdate(
      categoryId,
      updateCategory
    );

    if (!category) {
      throw new MyError(`Category with that id could not be updated.`, 400);
    }

    res.status(200).json({
      message: `Category with the id ${categoryId} has been updated.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      throw new MyError(
        `Category with that id could not be found, so it cannot be deleted.`,
        400
      );
    }

    res.status(200).json({
      message: `Deleted the category with the id ${categoryId}.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};
