import { NextFunction, Response } from "express";
import Basket from "../model/basket";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";

export const addToBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("Body", req.body);
  try {
    const findBasket = await Basket.findOne({ user: req.user._id });

    if (!findBasket) {
      const basket = await (
        await Basket.create({
          user: req.user._id,
          foods: [
            {
              food: req.body.foodId,
              count: req.body.quantity,
            },
          ],
          totalPrice: req.body.totalPrice,
        })
      ).populate("foods.food");
      console.log("BASK", basket);
      res.status(200).json({ message: "Added food v.1", basket });
    } else {
      console.log("BFOODS", findBasket);
      const findIndex = findBasket.foods.findIndex(
        (el) => el.food.toString() === req.body.foodId
      );
      console.log("Find", findIndex);

      if (findIndex !== -1) {
        findBasket.foods[findIndex].count = Number(req.body.quantity);
        findBasket.totalPrice = Number(req.body.totalPrice);
      } else {
        findBasket.foods.push(req.body.foods);
        findBasket.totalPrice = Number(req.body.totalPrice);
      }

      const savedBasket = await (
        await findBasket.save()
      ).populate("foods.food");

      console.log("Changed Foods", savedBasket);

      res.status(200).json({
        message: "Added food v.2",
        basket: { foods: savedBasket.foods, totalPrice: findBasket.totalPrice },
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("GOT BASKET");
  try {
    const findBasket = await Basket.findOne({ user: req.user._id }).populate(
      "foods.food"
    );

    if (!findBasket) {
      throw new MyError("Could not find basket information.", 400);
    }
    console.log("GET BASKET WORKING", findBasket);
    res.status(200).json({
      message: "Food info.",
      basket: { foods: findBasket.foods, totalPrice: findBasket.totalPrice },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBasketFood = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { foodId } = req.params;
  const { user } = req;

  console.log("User", user);
  console.log("FoodId", foodId);
  try {
    const findBasket = await Basket.findOne({ user: user._id }).populate(
      "foods.food"
    );
    if (!findBasket) {
      throw new MyError("Could not find basket information.", 400);
    }
    const findIndex = findBasket.foods.findIndex(
      (el) => el.food.toString() === foodId
    );
    console.log("Find IDX: ", findIndex);
    if (findIndex !== -1) {
      findBasket.foods.splice(findIndex, 1);
    }
    const savedBasket = await (await findBasket.save()).populate("foods.food");
    res.status(200).json({
      message: "Deleted food from basket.",
      basket: { foods: savedBasket.foods, totalPrice: savedBasket.totalPrice },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { basketId } = req.params;
    const basket = await Basket.findByIdAndDelete(basketId);
    if (!basket) {
      throw new MyError(`Cannot found ${basketId}-id basket table `, 400);
    }
    await basket?.save();
    res
      .status(200)
      .json({ message: `Deleted this ${basketId}-id basket`, basket });
  } catch (error) {
    next(error);
  }
};
