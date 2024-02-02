"use client";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { UserContext } from "@/context/UserProvider";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { CloudLogo } from "@/components/Logos";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("You must enter your username!")
    .min(2, "Your username should have at least 2 characters!")
    .max(20, "Please use a shorter username."),
  email: yup
    .string()
    .max(100, "Your email address has too many characters.")
    .required("You must enter your email!")
    .email("Email must be valid."),
  // .matches(
  //   /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/,
  //   "You must enter a google mail."
  // )
  address: yup.string().required("You must enter your address!"),
  password: yup
    .string()
    .required("You must enter your password!")
    .min(8, "Your password must have at least 8 characters"),
});

const SignupPage = () => {
  const { user, signup } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({ name, email, address, password }) => {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Address:", address);
      console.log("Password:", password);
      signup(name, email, address, password);
    },
    initialValues: { name: "", email: "", address: "", password: "" },
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
          height: "calc(89vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Бүртгүүлэх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            label="Нэр"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorText={formik.errors.name}
          />
          <Input
            label="Имэйл"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
          />
          <Input
            label="Хаяг"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            errorText={formik.errors.address}
          />
          <Input
            label="Нууц үг"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showPassword
          />
          <Input
            label="Нууц үг давтах"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showPassword
          />
        </Stack>
        <Typography
          sx={{ display: "flex", gap: "8px", mt: "16px", mb: "32px" }}
        >
          <CloudLogo />
          Үйлчилгээний нөхцөл зөвшөөрөх
        </Typography>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" onClick={formik.handleSubmit} />
        </Stack>
      </Box>
    </Container>
  );
};

export default SignupPage;
