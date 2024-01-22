"use client";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

import React from "react";

const NewpassEmail = () => {
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
          height: "calc(54vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700", mb: "48px" }}
        >
          Нууц үг сэргээх
        </Typography>
        <Stack width="100%" sx={{ mb: "48px" }}>
          <Input label="Имэйл" />
        </Stack>
        <Link href="/newpass2">
          <Stack flex="row" width="100%" justifyContent="flex-end">
            <Button label="Үргэжлүүлэх" btnType="outlined" />
          </Stack>
        </Link>
      </Box>
    </Container>
  );
};

export default NewpassEmail;
