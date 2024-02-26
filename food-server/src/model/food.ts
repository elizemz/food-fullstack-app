import { Schema, Types, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    require: [true, "Food must be named."],
    unique: true,
    maxlength: [50, "Food name cannot have more than 30 characters."],
  },
  price: {
    type: Number,
    default: 0,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
  isSale: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, "Food must have a description."],
  },
  image: {
    type: String,
    default: "no-food-photo",
  },
  category: {
    type: Schema.ObjectId,
    ref: "Category",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = model("Food", foodSchema);

export default Food;
