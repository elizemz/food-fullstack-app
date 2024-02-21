"use client";
import { createContext, useState, PropsWithChildren } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface IFood {
  name: string;
  price: number;
  discountPrice: number;
  isSale: boolean;
  description: string;
  image: string;
  category: string;
}

interface IFoodContext {
  foods: IFood[];
  getFood: () => void;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<IFood[]>([]);

  const getFood = async () => {
    console.log("FoodProvWorking");
  };

  return <FoodContext.Provider value={{}}>{children}</FoodContext.Provider>;
};
