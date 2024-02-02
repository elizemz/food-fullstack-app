import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, "Category name must be named."],
    unique: true,
    maxLength: [30, "Category name cannot have more than 30 characters."],
  },
  description: {
    type: String,
    required: [true, "Category must have a description."],
  },
  image: {
    type: String,
    default: "no-category-photo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model("Category", categorySchema);

export default Category;
