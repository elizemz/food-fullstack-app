import { Router } from "express";
import { upload } from "../utils/multer";
import { uploadFile } from "../controller/uploadController";

const router = Router();

router.route("/").post(upload.single("image"), uploadFile);

export default router;
