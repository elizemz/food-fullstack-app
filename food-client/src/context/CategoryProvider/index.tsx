"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { toast } from "react-toastify";

interface ICategory {
  _id: string;
  name: string;
}

interface ICategoryContext {
  categories: ICategory[];
}

export const CategoryContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const {
        data: { categories },
      } = await axios.get("http://localhost:8000/category");

      setCategories(categories);
    } catch (error: any) {
      toast.error("Error" + error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, [refresh]);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
