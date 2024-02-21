import { Router } from "express";
import {
  resetPassword,
  sendEmailToUser,
  verifyOtp,
  verifyUser,
} from "../controller/verifyController";

const router = Router();

router.route("/user").post(verifyUser);
router.route("/send-email").post(sendEmailToUser);
router.route("/otp").post(verifyOtp);
router.route("/reset-password").post(resetPassword);

export default router;
