import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { CardModal } from "../Modal";
import { useState } from "react";

const ProductCard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 282, position: "relative" }} onClick={handleOpen}>
        <CardMedia sx={{ height: 186 }} image="/assets/food-1.jpg" />
        <Chip
          color="primary"
          label="-20%"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
            fontSize: 18,
            border: 1,
          }}
        />
        <CardContent>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Өглөөний хоол
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography color={"primary"}>14,800₮</Typography>
            <Typography
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              16,800₮
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <CardModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default ProductCard;
