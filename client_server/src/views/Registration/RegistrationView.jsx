import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import LoginWhite from "../../assets/images/otros/landing_foto.png";
import { Grid, Box, Typography } from "@mui/material";

export default function RegistrationView() {
  return (
    <Box maxWidth="100%">
      <Box
        sx={{
          width: "100%",
          maxHeight: "100%",
          minHeight: "560px",
          backgroundImage: `url(${LoginWhite})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          item
          md={6}
          direction="column"
          alignItems={"flex-start"}
          sx={{
            paddingTop: "68px",
            width: "100%",
            paddingLeft: "126px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "common.black",
              textAlign: "center",
              paddingBottom: "68px",
            }}
          >
            Suscripción plan Basic de nuestra plataforma gratis durante 7 días
          </Typography>
          <RegistrationForm />
        </Grid>
      </Box>
    </Box>
  );
}
