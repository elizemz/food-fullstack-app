"use client";
import { createContext, useState, PropsWithChildren, useEffect } from "react";
import axios from "axios";

interface IBasket {
  food: { name: string };
  quantity: number;
}

interface IBasketContext {
  basket: IBasket[];
  getBasket: () => void;
}

export const BasketContext = createContext<IBasketContext>(
  {} as IBasketContext
);

export const BasketProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    getBasket();
  }, []);

  return (
    <BasketContext.Provider value={{ basket, getBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
