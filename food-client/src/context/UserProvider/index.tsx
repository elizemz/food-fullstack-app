"use client";
import { createContext, useState, PropsWithChildren } from "react";

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

  const login = (email: string, password: string): void => {};

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
