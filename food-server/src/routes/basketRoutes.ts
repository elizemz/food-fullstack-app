import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  addToBasketByUserId,
  deleteFromBasketByUser,
  getFromBasketByUser,
  updateBasket,
} from "../controller/basketController";

const router = Router();

router
  .route("/")
  .post(authenticate, addToBasketByUserId)
  .get(authenticate, getFromBasketByUser)
  .put(authenticate, updateBasket);

router.route("/:foodId").delete(authenticate, deleteFromBasketByUser);

export default router;
