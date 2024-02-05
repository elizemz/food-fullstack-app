import { Router } from "express";
import {
  createFood,
  getFood,
  getAllFood,
  updateFood,
  deleteFood,
} from "../controller/foodController";

const router = Router();

router
  .route("/")
  .get(getAllFood)
  .post(createFood)
  .put(updateFood)
  .delete(deleteFood);

router.route("/").get(getFood);

export default router;
