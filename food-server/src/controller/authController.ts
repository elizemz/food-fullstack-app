import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user";
import { sendEmail } from "../utils/sendEmail";
import errorHandler from "../middleware/errorHandler";
import MyError from "../utils/myError";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Signup");
  try {
    const newUser = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    const user = await User.create({ ...newUser, password: hashedPassword });
    const verifyToken = jwt.sign(
      { email: user.email },
      process.env.JWT_PRIVATE_KEY as string,
      {
        expiresIn: "5m",
      }
    );
    sendEmail({ email: user.email, token: verifyToken });
    res.status(201).json({
      message:
        "Account successfully created, check your inbox for verification details.",
    });
  } catch (error) {
    res.status(400).json({
      message: "There was error during the account creation process.",
      error,
    });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    console.log("LOGIN", email);
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new MyError(`Could not find an account with that email.`, 400);
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new MyError(`Email or Password is incorrect.`, 401);
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    const { ...otherParams } = user;

    res.status(201).json({
      message: "User successfully logged in.",
      token,
      user: otherParams,
    });
  } catch (error) {
    next(error);
  }
};
