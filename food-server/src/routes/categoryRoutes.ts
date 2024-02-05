import { Router } from "express";
import {
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
} from "../controller/categoryController";

const router = Router();

router
  .route("/")
  .get(getAllCategory)
  .post(createCategory)
  .put(updateCategory)
  .delete(deleteCategory);

router.route("/").get(getCategory);

export default router;
