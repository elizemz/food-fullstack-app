"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "..";

import axios from "axios";
import { toast } from "react-toastify";

interface IBasket {
  _id: string;
  food: {
    image: string;
    name: string;
    _id: string;
    description: string;
    price: number;
  };
  count: number;
}
interface IBasketObject {
  userId: string;
  foods: IBasket[];
  totalPrice: number;
}

interface IBasketContext {
  loading: boolean;
  basket: IBasketObject | null;
  addToBasket: (foodItem: any) => Promise<void>;
  deleteBasketFood: (food: any) => Promise<void>;
  updateFoodBasket: (foodItem: any) => Promise<void>;
}

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [basket, setBasket] = useState<IBasketObject | null>(null);
  const [refresh, setRefresh] = useState(false);

  const createReq = async (foodItem: any) => {
    const { data } = (await axios.post(
      "http://localhost:8000/basket/",
      foodItem,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )) as {
      data: any;
    };
    return { basket: data.basket, message: data.message };
  };

  const getBaskets = async () => {
    try {
      if (token) {
        const {
          data: { basket },
        } = await axios.get("http://localhost:8000/basket/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBasket({ ...basket });
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  const addToBasket = async (foodItem: any) => {
    console.log("Food", foodItem);
    try {
      const { basket, message } = await createReq(foodItem);
      console.log("RES", basket);
      setBasket({ ...basket });
      toast.success(message);
      setLoading(false);
      setRefresh(!refresh);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const updateFoodBasket = async (foodItem: any) => {
    console.log("Food", foodItem);
    try {
      const { basket } = await createReq(foodItem);
      console.log("RES", basket);
      setBasket({ ...basket });
      setLoading(false);
      setRefresh(!refresh);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const deleteBasketFood = async (value: any) => {
    try {
      setLoading(true);

      if (user) {
        const {
          data: { basket },
        } = await axios.delete("http://localhost:8000/basket/" + value, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        setRefresh(!refresh);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  useEffect(() => {
    getBaskets();
  }, [refresh, token]);

  return (
    <BasketContext.Provider
      value={{
        loading,
        basket,
        addToBasket,
        deleteBasketFood,
        updateFoodBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
