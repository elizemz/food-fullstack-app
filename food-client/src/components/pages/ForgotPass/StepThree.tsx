import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";

const StepThree = () => {
  const router = useRouter();
  const savePassword = async () => {
    await Swal.fire({
      title: "Password reset successfully.",
      text: "Please enter your new password.",
      icon: "success",
    });
    router.replace("/login");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Шинэ нууц үг cэргээх
        </Typography>

        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Нууц үг" name="" showPassword />
          <Input label="Нууц үг давтах" name="" showPassword />
          <Button label={"Сэргээх"} onClick={savePassword} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
