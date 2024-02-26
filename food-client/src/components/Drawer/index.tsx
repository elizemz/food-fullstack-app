"use client";
import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { DrawerCard } from "../DrawerCard";

interface IDrawerProps {
  open: boolean;
  handleClose: () => void;
}

const MyDrawer = ({ handleClose, open }: IDrawerProps) => {
  return (
    <>
      <React.Fragment>
        <Drawer open={open} onClose={handleClose} anchor="right">
          <Box width={584} p={5}>
            <Box
              pb={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FaChevronLeft onClick={handleClose} />
              <Typography fontWeight={600}>Таны сагс</Typography>
              <Typography></Typography>
            </Box>
            <Divider />
            <DrawerCard />
            <Box sx={{ boxShadow: "3" }}></Box>

            <Divider sx={{ position: "relative", top: "800px" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
                marginLeft: "20px",
                marginRight: "20px",
                padding: "20px",
                position: "relative",
                top: "800px",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "16px", color: "grey" }}>
                  Нийт төлөх дүн:
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                  ???
                </Typography>
              </Box>
              <Link
                href="/basket"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    fontSize: "16px",
                    backgroundColor: "#18BA51",
                    width: "240px",
                    height: "50px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                  }}
                  onClick={handleClose}
                >
                  Захиалах
                </Typography>
              </Link>
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MyDrawer;
