"use client";
import { FoodCard } from "..";
import { FoodContext } from "@/context";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  id: string;
  categoryName: string;
  foods: any;
};

export const DashFood = ({ foods, categoryName, id }: Props) => {
  const [categoryFoods, setCategoryFoods] = useState<any>();
  const router = useRouter();

  return (
    <Container>
      <Grid
        sx={{ mt: 3, pt: 3 }}
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" marginLeft={2}>
            {" "}
            {categoryName}
          </Typography>
        </Stack>
        <Button
          onClick={() => router.replace("/categories/123")}
          sx={{ color: "#18BA51", ml: 2 }}
        >
          Бүгдийг харах
        </Button>
      </Grid>

      <Grid>
        <Stack
          sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          {foods &&
            foods
              ?.filter((food: any) => food.category._id == id)
              .map((food: any) => (
                <Grid item key={food._id}>
                  <FoodCard food={food} />
                </Grid>
              ))}
        </Stack>
      </Grid>
    </Container>
  );
};
