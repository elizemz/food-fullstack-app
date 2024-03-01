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
  rePassword: {
    type: String,
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
  phone: { type: String },
  orders: [
    {
      orderNo: String,
      payment: {
        paymentAmount: Number,
        status: {
          type: String,
          enum: ["paid", "pending"],
          default: "pending",
        },
        paidDate: Date,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
      address: {
        khoroo: { type: String },
        street: { type: String },
        buildingNum: { type: String },
        info: { type: String },
      },
      delivery: {
        status: {
          type: String,
          enum: ["pending", "in-progress", "delivered"],
          default: "pending",
        },
        deliveredAt: {
          type: Date,
          default: Date.now,
        },
      },
    },
  ],
});

userSchema.pre("save", async function async(next) {
  console.log("Saving User Model");
  if (this.isModified("password")) {
    console.log("Changed", this.password);

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  console.log("Saving User Model");
  next();
});

const User = model("User", userSchema);

export default User;
