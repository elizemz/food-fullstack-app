"use client";
import { createContext, useState, PropsWithChildren, useEffect } from "react";
import axios from "axios";

interface IFood {
  name: string;
  price: number;
  discountPrice: number;
  isSale: boolean;
  description: string;
  image: string;
  category: { name: string };
}

interface IFoodContext {
  foods: IFood[];
  getFood: () => void;
  filteredFoods: any;
  setFilteredFoods: any;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<IFood[]>([]);

  const getFood = async () => {
    console.log("FoodProvWorking");
    try {
      const {
        data: { foods },
      } = await axios.post("http://localhost:8000/food");
      console.log("Food is here.", foods);
      setFoods(foods);
    } catch (error: any) {
      console.log("Could not add your food.");
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const [filteredFoods, setFilteredFoods] = useState([]);

  return (
    <FoodContext.Provider
      value={{ foods, getFood, filteredFoods, setFilteredFoods }}
    >
      {children}
    </FoodContext.Provider>
  );
};
