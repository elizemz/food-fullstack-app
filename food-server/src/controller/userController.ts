import { Request, Response } from "express";
import User from "../model/user";

export const getUsers = async (req: Request, res: Response) => {
  console.log("Headers", req.headers);

  try {
    const users = await User.find();
    res.status(201).json({ message: "Found all users.", users });
  } catch (error) {
    res.status(400).json({
      message: "There was an error during the process.",
    });
  }
};
