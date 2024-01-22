"use client";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

import React from "react";

const NewpassConfirm = () => {
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
          height: "calc(60.9vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700", mb: "48px" }}
        >
          Нууц үг сэргээх
        </Typography>
        <Typography
          sx={{
            mb: "32px",
            fontSize: "16px",
            color: "#695C08",
            fontWeight: "500",
          }}
        >
          Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
        </Typography>
        <Stack width="100%" sx={{ mb: "48px" }}>
          <Input label="Нууц үг сэргээх код" showPassword />
        </Stack>
        <Link href="/newpass3">
          <Stack flex="row" width="100%" justifyContent="flex-end">
            <Button label="Үргэжлүүлэх" btnType="outlined" />
          </Stack>
        </Link>
      </Box>
    </Container>
  );
};

export default NewpassConfirm;
