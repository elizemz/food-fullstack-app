import { Request, Response } from "express";
import User from "../model/user";

export const getUsers = async (req: Request, res: Response) => {
  console.log("Headers", req.headers);
};
