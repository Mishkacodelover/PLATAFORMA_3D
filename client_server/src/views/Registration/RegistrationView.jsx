import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

// import Maniqui from "../../assets/images/maniquiclaro.jpg";
// import LoginBlack from "../../assets/images/negroclarologin.jpg";
import LoginWhite from "../../assets/images/dibujoBlancoyNegroclaro.jpg";
import { Grid, Box } from "@mui/material";

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
            paddingTop: "136px",
            width: "100%",
            paddingLeft: "126px",
          }}
        >
          <RegistrationForm />
        </Grid>
      </Box>
    </Box>
  );
}
