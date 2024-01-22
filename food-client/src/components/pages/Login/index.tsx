"use client";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
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
          <Input label="Имэйл" />
          <Input label="Нууц үг" showPassword />
          {/* <Button label="Нууц үг сэргээх" btnType="text" /> */}
          <Typography variant="button" align="right" sx={{ mt: "1rem" }}>
            {" "}
            <Link href="/newpass1">Нууц үг сэргээх </Link>
          </Typography>
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" />
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
