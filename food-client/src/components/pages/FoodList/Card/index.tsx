"use client";
import { Button } from "../..";
import { CardModal } from "@/components/FoodModal";
import StarIcon from "@/components/StarIcon";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Container,
  Stack,
  Grid,
  Chip,
} from "@mui/material";
import { useState } from "react";

interface IFoodProps {
  food: {
    _id: string;
    name: string;
    price: number;
    discountPrice: number;
    isSale: undefined | boolean;
    img: string;
  };
}

export const FoodCard = ({ food }: IFoodProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} justifyContent="center">
      <Card
        sx={{
          maxWidth: 282,
          margin: "20px auto",
          border: "none",
          boxShadow: "none",
        }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <div style={{ position: "relative" }}>
            <CardMedia
              sx={{ borderRadius: 2 }}
              component="img"
              height={150}
              image={food?.img}
              alt="food img"
              onClick={() => handleOpen()}
            />
            {food?.isSale === true ? (
              <Chip
                label="-20%"
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 15,
                  bgcolor: "#18BA51",
                  color: "white",
                }}
              />
            ) : (
              ""
            )}
            <CardContent>
              <Typography gutterBottom variant="h6" component="p">
                {food?.name}
              </Typography>
              {food?.isSale === true ? (
                <div style={{ display: "flex", gap: 7 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#18BA51", fontWeight: 800 }}
                  >
                    {food?.discountPrice}₮
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ textDecoration: "line-through" }}
                  >
                    {food?.price}₮
                  </Typography>
                </div>
              ) : (
                <div>
                  <Typography
                    variant="h6"
                    sx={{ color: "#18BA51", fontWeight: 800 }}
                  >
                    {food?.price}₮
                  </Typography>
                </div>
              )}
            </CardContent>
          </div>
        </CardActionArea>
      </Card>

      {open && <CardModal handleClose={handleClose} open={open} food={food} />}
    </Grid>
  );
};

export const FoodCardItem = () => {
  return <Box display="flex" flexWrap="wrap"></Box>;
};
