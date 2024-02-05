import { Router } from "express";
import { uploadFile } from "../controller/uploadController";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "./uploads" });

router.route("/").post(upload.single("image"), uploadFile);

export default router;
