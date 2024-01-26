import { Router } from "express";
import { getUsers } from "../controller/userController";

const router = Router();

router.route("/").post(getUsers);

export default router;
