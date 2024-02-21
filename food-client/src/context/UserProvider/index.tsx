"use client";
import { createContext, useState, PropsWithChildren } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
  rePassword?: string;
}

interface IUserContext {
  userForm: IUser;
  login: (email: string, password: string) => void;
  signup: (
    name: string,
    email: string,
    address: string,
    password: string,
    rePassword: string
  ) => void;
}

export const UserContext = createContext<IUserContext>({
  userForm: {
    name: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  },
  login: function (): void {},
  signup: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [userForm, setUserForm] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  });

  const login = async (email: string, password: string) => {
    console.log("LoginWorking");
    console.log("UUU", userForm);
    try {
      const { data } = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      setUserForm(data.user);
      setUserForm(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      console.log("DataLogin", data);
      router.push("/");
    } catch (error) {
      toast.error("Could not log-in due to an error");
    }
  };

  const signup = async (
    name: string,
    email: string,
    address: string,
    password: string,
    rePassword: string
  ) => {
    console.log("SignupWorking");
    console.log("UUU", userForm);

    try {
      const { data } = await axios.post("http://localhost:8000/auth/signup", {
        name,
        email,
        address,
        password,
        rePassword,
      });
      setUserForm(data.user);
      setUserForm(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      console.log("DataSignup", data);
      router.push("/login");
    } catch (error) {
      toast.error("Could not sign-up due to an error");
    }
  };

  return (
    <UserContext.Provider value={{ userForm, login, signup }}>
      {children}
    </UserContext.Provider>
  );
};
