"use client";
import { createContext, useState, PropsWithChildren, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface ICategory {
  name: string;
  description: string;
  image: string;
}

interface ICategoryContext {
  categories: ICategory[];
  getCategory: () => void;
}

export const CategoryContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const getCategory = async () => {
    console.log("CategoryProvWorking");
    try {
      const {
        data: { categories },
      } = await axios.post("http://localhost:8000/category");
      console.log("Category is here.", categories);
      setCategories(categories);
    } catch (error: any) {
      console.log("Could not add your category.");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, getCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
