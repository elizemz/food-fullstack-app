"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface IFood {
  _id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  discountPrice?: number;
  category: object;
  isSale: boolean;
}

interface IFoodContext {
  foods: IFood[];
  getFoods: () => Promise<void>;
  isLoading: boolean;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(false);
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFoods = async () => {
    try {
      const {
        data: { foods },
      } = await axios.get("http://localhost:8000/food");
      setFoods(foods);
      setIsLoading(false);
    } catch (error: any) {
      toast.error("Error" + error.message);
    }
  };

  useEffect(() => {
    getFoods();
  }, [refresh]);

  return (
    <FoodContext.Provider value={{ foods, getFoods, isLoading }}>
      {children}
    </FoodContext.Provider>
  );
};
