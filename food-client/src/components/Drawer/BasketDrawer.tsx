import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  Button as MuiButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { BasketContext } from "@/context";
import DrawerCard from "./BasketCard";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const BasketDrawerProp = ({ open, handleClose }: Props) => {
  const { baskets, loading } = useContext(BasketContext);

  const router = useRouter();

  const changeOnclick = () => {
    router.push("/order"), handleClose();
  };

  const sum = baskets?.foods
    ?.map((food: any) => food?.food?.price * food.count)
    .reduce((a: any, b: any) => a + b, 0);
  return (
    <Drawer
      anchor="right"
      open={open}
      sx={{ position: "relative" }}
      onClose={() => {
        handleClose();
      }}
    >
      <Box width="590px" textAlign="center">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            py: 4,
            borderBottom: 1,
            borderColor: "#D6D8DB",
          }}
        >
          <Grid item xs={1}>
            <MuiButton onClick={() => handleClose()} sx={{ color: "black" }}>
              <ArrowBack />
            </MuiButton>
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ ml: 10 }}
              component="h1"
            >
               Таны сагс
            </Typography>
          </Grid>
        </Grid>
        {!baskets?.foods && (
          <Stack height={"90%"} justifyContent={"center"} alignItems={"center"}>
            <Box
              width={200}
              height={200}
              sx={{ display: "flex", justifyContent: "center" }}
            ></Box>
            <Typography variant="h6" align="center">
              Хоосон байна
            </Typography>
          </Stack>
        )}
        <Box sx={{ marginTop: "", backgroundColor: "black" }}>
          {baskets?.foods && (
            <DrawerCard
              baskets={baskets}
              loading={loading}
              changeOnclick={changeOnclick}
              sum={sum}
            />
          )}
        </Box>
      </Box>
    </Drawer>
  );
};
