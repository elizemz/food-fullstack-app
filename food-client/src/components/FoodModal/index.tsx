"use client";
import { useState, useContext } from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { Button } from "../pages";
import { BasketContext } from "@/context";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  food: any;
}

export const CardModal = ({ food, handleClose, open }: IModalProps) => {
  const { addBasket, loading }: any = useContext(BasketContext);
  const [count, setCount] = useState(1);

  const handleCount = (operation: string) => {
    if (operation === "add") {
      if (count < 10) setCount(count + 1);
    } else {
      if (count) setCount(count - 1);
    }
  };

  const handleSave = () => {
    addBasket({
      foodId: food._id,
      quantity: count,
      totalPrice: count * food.price,
    });

    handleClose();
  };

  const router = useRouter();

  return (
    <Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container display={"flex"} flexDirection={"row"} gap={10}>
            <Grid item xs={6}>
              <img
                alt=""
                width={250}
                height={250}
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>

            <Grid
              item
              xs={5}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={3}
            >
              <Grid item xs={1} position={"relative"}>
                <MuiButton
                  onClick={handleClose}
                  sx={{ ml: 67, position: "absolute" }}
                >
                  <Close />
                </MuiButton>
              </Grid>
              <Grid display={"flex"} flexDirection={"column"} gap={2}>
                <Stack>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    fontWeight={600}
                    component="h2"
                  >
                    {food.name}
                  </Typography>
                  <Typography
                    my={2}
                    id="modal-modal-description"
                    sx={{ color: "#18BA51" }}
                  >
                    {food.price}₮
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Орц
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body2"
                    bgcolor={"#F6F6F6"}
                    p={3}
                    borderRadius={4}
                    my={2}
                  >
                    {food.description}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Тоо
                  </Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <MuiButton onClick={() => handleCount("min")}>
                      <Remove
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          py: 1,
                          borderRadius: 2,
                        }}
                      />
                    </MuiButton>
                    <input
                      type="text"
                      value={count}
                      style={{
                        width: "100px",
                        border: "none",
                        textAlign: "center",
                        paddingTop: 4,
                        paddingBottom: 4,
                        fontWeight: 600,
                        fontSize: 16,
                      }}
                    />
                    <MuiButton onClick={() => handleCount("add")}>
                      <Add
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          borderRadius: 2,
                        }}
                      />
                    </MuiButton>
                  </Box>
                </Stack>

                <Button
                  label={"Сагслах"}
                  disabled={loading}
                  onClick={() => handleSave()}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Stack>
  );
};
