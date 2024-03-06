import { Grid, Stack, Typography, Box, Divider } from "@mui/material";
import React from "react";
import { BasketFoods } from "./BasketFood";
import { Button } from "../pages";

type Props = {
  basket: any;
  loading: boolean;
  changeOnclick: () => void;
  sum: number;
};

const DrawerCard = ({ basket, loading, changeOnclick, sum }: Props) => {
  return (
    <Stack
      direction={"column"}
      height={"93%"}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <Box
        alignSelf={"center"}
        height={"100%"}
        width={"100%"}
        overflow={"auto"}
      >
        {basket?.foods?.map((food: any) => (
          <BasketFoods key={food._id} food={food.food} foodCount={food.count} />
        ))}
      </Box>
      <Grid
        width={"100%"}
        container
        boxShadow={3}
        bgcolor={"white"}
        py={10}
        px={5}
        sx={{ position: "absolute", bottom: "0" }}
      >
        <Grid
          item
          xs={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          pl={5}
        >
          <Typography variant="body1" component="h6">
            Нийт төлөх дүн
          </Typography>
          <Typography variant="body1" fontWeight={600} component="h6">
            {sum}₮
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            label={"Захиалах"}
            onClick={changeOnclick}
            disabled={loading}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DrawerCard;
