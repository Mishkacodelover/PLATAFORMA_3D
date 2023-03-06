import { Grid, Box, Typography } from "@mui/material";

import LoginWhite from "../../assets/images/otros/landing_foto.png";
import LoginForm from "../../components/LoginForm";

export default function LoginView() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          minHeight: "560px",
          backgroundImage: `url(${LoginWhite})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems={"flex-start"}
          sx={{
            paddingTop: "84px",
            maxWidth: "100%",
            paddingLeft: "100px",
          }}
        >
          <Grid item md={12}>
            <Typography variant="h1" sx={{ color: "secondary.dark" }}>
              Te da la bienvenida...
            </Typography>
          </Grid>
          <Grid item md={5}>
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
