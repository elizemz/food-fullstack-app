"use client";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { UserContext } from "@/context/UserProvider";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext, useState, ChangeEvent } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "Your email address has too many characters.")
    .required("You must enter your email!")
    .email("Email must be valid."),
  // .matches(
  //   /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/,
  //   "You must enter a google mail."
  // )
  password: yup
    .string()
    .required("You must enter your password!")
    .min(8, "Your password must have at least 8 characters"),
});

const LoginPage = () => {
  const { user, login } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const data = await axios.post("http://localhost:8000/auth/login", {
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      toast.error("Couldn't log-in to an error.");
    }
  };

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      console.log("Email:", email);
      console.log("Password:", password);
      login(email, password);
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          height: "calc(72vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нэвтрэх
        </Typography>
        <Stack width="100%" sx={{ mb: "1rem" }}>
          <Input
            label="Имэйл"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
          />
          <Input
            label="Нууц үг"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showPassword
          />

          <Typography variant="button" align="right" sx={{ mt: "1rem" }}>
            {" "}
            <Link href="/forgot">Нууц үг сэргээх </Link>
          </Typography>
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button
            label="Нэвтрэх"
            // onClick={formik.handleSubmit}
            onClick={handleLogin}
          />
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Link href="/signup" style={{ textDecoration: "none" }}>
            <Button label="Бүртгүүлэх" btnType="outlined" />
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
