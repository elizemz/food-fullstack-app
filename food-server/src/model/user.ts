import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

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
  address: {
    khoroo: { type: String },
    street: { type: String },
    buildingNum: Number,
  },
  role: {
    type: ["admin", "user", "moderator"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function async() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model("User", userSchema);

export default User;
