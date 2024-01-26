import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.status(201).json({ message: "Account successfully created." });
  } catch (error) {
    res.status(400).json({
      message: "There was an error during the account creation process.",
    });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("LOGIN", email);
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: `${email} is not registered.` });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res
        .status(400)
        .json({ message: "Email or Password is incorrect." });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({ message: "Logged in successfully.", user });
  } catch (error) {
    res.status(400).json({
      message: "There was an error during the logging in process.",
    });
  }
};
