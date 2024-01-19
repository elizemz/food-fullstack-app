"use client";
import * as React from "react";
import { BottomNavigation } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { PineWhite } from "@/components/Logos";

const footerPages = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

export default function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <main>
      <BottomNavigation
        sx={{
          backgroundColor: "#18BA51",
          height: "545px",
          padding: "120px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "40px",
                  margin: "auto",
                }}
              >
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <PineWhite />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "32px",
                      fontWeight: "700",
                      lineHeight: "normal",
                    }}
                  >
                    Food Delivery
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "space-evenly",
                  }}
                >
                  {footerPages.map((footerPage) => (
                    <Button
                      key={footerPage}
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: "#FFFFFF",
                        display: "block",
                        fontSize: "16px",
                        fontWeight: "590",
                        textDecorationLine: "underline",
                      }}
                    >
                      {footerPage}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </BottomNavigation>
    </main>
  );
}
