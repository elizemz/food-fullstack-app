"use client";
import { createContext, useState, PropsWithChildren } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
}

interface IUserContext {
  user: IUser;
  login: (email: string, password: string) => void;
  signup: (
    name: string,
    email: string,
    address: string,
    password: string
  ) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    address: "",
    password: "",
  },
  login: function (): void {},
  signup: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "Test User",
    email: "",
    address: "",
    password: "",
  });

  const login = (email: string, password: string): void => {
    // console.log("loginworking");
    // console.log("UUU", userForm)
    // try{
    //   const {data} = await axios.post(
    //     "http://localhost:800/auth/login",{
    //       email, password,
    //     }
    //   )
    //   }
  };

  const signup = (
    name: string,
    email: string,
    address: string,
    password: string
  ): void => {};

  return (
    <UserContext.Provider value={{ user, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};
