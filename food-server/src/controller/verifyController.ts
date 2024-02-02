import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail";
import User from "../model/user";

export const sendEmailToUser = async (req: Request, res: Response) => {
  console.log("SEND_EMAIL");
  try {
    const { email } = req.body;

    const otp = Math.round(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({ message: "Couldn't find user." });
    }

    console.log("OTP", otp);
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);

    await findUser.save();

    await sendEmail({ email, otp });

    res.status(201).json({ message: "Email sent." });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({
      message: "Could not send email due to an error.",
      error,
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    console.log("email", email);
    console.log("OTP", otp);

    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      return res.status(400).json({ message: "Couldn't find user." });
    }

    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      return res.status(400).json({ message: "Code is incorrect!" });
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP accepted." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error.", error });
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;

    const { email } = jwt.verify(
      token as string,
      process.env.JWT_PRIVATE_KEY as string
    ) as { email: string };

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      res.status(500).send("Not verified.");
    } else {
      findUser.isVerified = true;
    }

    await findUser?.save();

    res.status(200).send(`<h1 style="color: green">Validated</h1>`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error.", error });
  }
};

export const resetPassword = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Internal server error.", error });
  }
};
