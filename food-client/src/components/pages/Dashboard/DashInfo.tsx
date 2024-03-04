import { InfoCard } from "@/components/Sections/InfoList";
import { Box, Container } from "@mui/material";
import React from "react";

type Props = {};

export const DashInfo = (props: Props) => {
  return (
    <Box
      sx={{
        marginBottom: "32px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <InfoCard />
    </Box>
  );
};
