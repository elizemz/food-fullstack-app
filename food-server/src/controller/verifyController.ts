import { Request, Response } from "express";
import User from "../model/user";
import { sendEmail } from "../utils/sendEmail";

export const sendEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await sendEmail(email, "Verify Account");

    res.status(201).json({ message: "Email sent successfully." });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({
      message: "Couldn't send email due to an error.",
      error,
    });
  }
};
