import { NextFunction, Request, Response } from "express";
import { IReq } from "../utils/interface";
import Basket from "../model/basket";

export const addBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("Body", req.body);

  try {
    const findBasket = await Basket.findOne({ user: req.user._id });
    if (!findBasket) {
      const basket = await Basket.create({
        user: req.user._id,
        foods: [
          {
            food: req.body.foodId,
            qty: req.body.quantity,
          },
        ],
        totalPrice: req.body.price,
      });
      res.status(200).json({ message: "Food put in basket." });
    } else {
      const findIndex = findBasket.foods.findIndex(
        (el) => el.food === req.body.foodId
      );
      if (findIndex !== -1) {
        findBasket.foods[findIndex].qty = Number(req.body.quantity);
        findBasket.totalPrice = Number(req.body.price);
      }
      res.status(200).json({ message: "FFFood put in basket." });
      await findBasket.save();
    }
    return res.send("He22o");
  } catch (error) {
    next(error);
  }
};

export const getBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("Body", req.body);

  res.send("Hello from addBasket");
  try {
    const basket = Basket.create({
      user: req.user._id,
      foods: [
        {
          food: req.body.foodId,
          qty: req.body.quantity,
        },
      ],
      totalPrice: 100,
    });
    return res.send("Hell2");
  } catch (error) {
    next(error);
  }
};

export const deleteBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("Body", req.body);

  res.send("Hello from addBasket");
  try {
    const basket = Basket.create({
      user: req.user._id,
      foods: [
        {
          food: req.body.foodId,
          qty: req.body.quantity,
        },
      ],
      totalPrice: 100,
    });
    return res.send("Hell2");
  } catch (error) {
    next(error);
  }
};
