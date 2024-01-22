"use client";

import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";

import React from "react";

const NewpassNew = () => {
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
          height: "calc(63vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700", mb: "48px" }}
        >
          Шинэ нууц үг зохиох
        </Typography>
        <Stack width="100%" sx={{ mb: "48px" }}>
          <Input label="Нууц үг" showPassword />
          <Input label="Нууц үг давтах" showPassword />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Үргэжлүүлэх" btnType="outlined" />
        </Stack>
      </Box>
    </Container>
  );
};

export default NewpassNew;
