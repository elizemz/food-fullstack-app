"use client";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { CloudLogo } from "@/components/Logos";

const SignupPage = () => {
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
          <Input label="Нэр" />
          <Input label="Имэйл" />
          <Input label="Хаяг" />
          <Input label="Нууц үг" showPassword />
          <Input label="Нууц үг давтах" showPassword />
        </Stack>
        <Typography
          sx={{ display: "flex", gap: "8px", mt: "16px", mb: "32px" }}
        >
          <CloudLogo />
          Үйлчилгээний нөхцөл зөвшөөрөх
        </Typography>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" />
        </Stack>
      </Box>
    </Container>
  );
};

export default SignupPage;
