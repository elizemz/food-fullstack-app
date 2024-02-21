"use client";
import { createContext, useState, PropsWithChildren } from "react";
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

export const CategoryContext = createContext({});

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<ICategory>({
    name: "",
    description: "",
    image: "",
  });

  const getCategory = async () => {
    console.log("CategoryProvWorking");
    try {
      const {
        data: { categories },
      } = await axios.post("http://localhost:8000/category/");
    } catch (error) {}
  };

  return (
    <CategoryContext.Provider value={{}}>{children}</CategoryContext.Provider>
  );
};
