import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  addToBasket,
  deleteBasketFood,
  deleteBasket,
  getBasket,
} from "../controller/basketController";

const router = Router();

router.route("/").post(authenticate, addToBasket).get(authenticate, getBasket);

router.route("/:foodId").delete(authenticate, deleteBasketFood);
router.route("/:basketId").delete(authenticate, deleteBasket);

export default router;
