"use client";

import { FoodContext } from "@/context";
import { Container, Grid, Skeleton, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CategoryContext } from "@/context/CategoryProvider";
import { DashFood } from "./DashFood";
import { DashInfo } from "./DashInfo";
import CategorySkeleton from "@/components/CategoryUI";
import CategoryFoodList from "../CategoryFoodList";

export const Dashboard = () => {
  const { foods, isLoading, getFoods } = useContext(FoodContext);
  const { categories } = useContext(CategoryContext);

  return (
    <Grid container>
      <DashInfo />
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        categories.map((category) => (
          <DashFood
            key={category._id}
            foods={foods}
            categoryName={category.name}
            id={category._id}
          />
        ))
      )}
      <Stack
        width={"60%"}
        direction="row"
        justifyContent="space-between"
        gap={10}
        sx={{ margin: "auto" }}
      >
        <Skeleton height={200} width={"100%"}></Skeleton>
        <Skeleton height={200} width={"100%"}></Skeleton>
        <Skeleton height={200} width={"100%"}></Skeleton>
        <Skeleton height={200} width={"100%"}></Skeleton>
      </Stack>
    </Grid>
  );
};
