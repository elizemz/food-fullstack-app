import { Button as MuiButton, Stack, darken } from "@mui/material";
import { ReactNode } from "react";

interface IButtonProps {
    label: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({label, disabled = false, onClick}) => {
  return (
    <Stack gap={1}>
      <MuiButton onClick={onClick} sx={{
        p: 3,
        border: 1,
        borderColor: "divider",
        background: "#18BA51",
        "&:hover:"{
            background: "#18BA51",
            opacity: "0.75",
        },
      }}
      >{label}</MuiButton>
    </Stack>
  );
};
