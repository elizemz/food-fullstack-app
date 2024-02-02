import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name required to continue."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email required to continue."],
  },
  password: {
    type: String,
    required: [true, "Password required to continue."],
    minlength: 8,
    select: false,
  },
  avatarUrl: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  address: {
    khoroo: { type: String },
    street: { type: String },
    buildingNum: Number,
  },
  role: {
    type: ["admin", "user", "moderator"],
    default: "user",
  },
  otp: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = model("User", userSchema);

export default User;
