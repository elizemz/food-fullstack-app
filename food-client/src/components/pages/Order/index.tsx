"use client";
import { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const duureg = ["Bayngol", "Songinohairhan"];

const OrderPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto ",
          height: "calc(89vh - 90px)",
        }}
      >
        <Box>
          <Box>
            <Box>Алхам 1</Box>
            <Box>Хаягийн мэдээлэл</Box>
          </Box>
        </Box>
        <Box>
          <Box></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPage;
