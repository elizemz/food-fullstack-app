import { Router } from "express";
import {
  resetPassword,
  sendEmailToUser,
  verifyOtp,
  verifyUser,
} from "../controller/verifyController";

const router = Router();

router.route("/user").post(verifyUser);
router.route("/sendemail").post(sendEmailToUser);
router.route("/otp").post(verifyOtp);
router.route("/reset").post(resetPassword);

export default router;
