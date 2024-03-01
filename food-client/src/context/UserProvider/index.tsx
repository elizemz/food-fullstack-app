"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";
import { Flag } from "@mui/icons-material";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
  phoneNumber?: string;
}

interface IUserContext {
  userForm: IUser | null;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    password: string,
    email: string,
    address: string
  ) => Promise<void>;
  logout: () => void;
  loading: boolean;
  token: string | null;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userForm, setUserForm] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
  });

  const handleNext = () => {
    router.replace("/");
  };
  const handleGoLogin = () => {
    router.replace("/login");
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const {
        data: { token, user },
      } = await axios.post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      });
      console.log("Logged-in", token, user);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged-in successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      handleNext();
    } catch (error) {
      toast.error("Encountered an error while trying to log-in.");
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
    if (storedToken) {
      const isValidJSON = /^[\],:{}\s]*$/.test(
        storedToken
          .replace(/\\["\\\/bfnrtu]/g, "@")
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )
      );
      if (isValidJSON) {
        try {
          const parsedToken = JSON.parse(storedToken);
          setToken(parsedToken);
        } catch (error) {
          console.error("Failed to parse token :", error);
        }
      } else {
        // console.error("Invalid token data:", storedToken);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    address: string
  ) => {
    try {
      setLoading(true);
      const data = await axios.post("http://localhost:8000/auth/signup", {
        name: name,
        email: email,
        address: address,
        password: password,
      });

      await Swal.fire({
        position: "top-end",
        title: "You signed up.",
        text: "Check your email for a verification link.",
        icon: "success",
        timer: 5000,
        showConfirmButton: false,
      });

      handleGoLogin();
    } catch (error) {
      toast.error("Encountered an error.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, [user]);

  return (
    <UserContext.Provider
      value={{ logout, login, signup, userForm, loading, user, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
