import { Grid, Box } from "@mui/material";

// import Maniqui from "../../assets/images/maniquiclaro.jpg";
// import LoginBlack from "../../assets/images/negroclarologin.jpg";

import LoginWhite from "../../assets/images/dibujoBlancoyNegroclaro.jpg";
import LoginForm from "../../components/LoginForm";

export default function LoginView() {
  return (
    <>
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
            direction="column"
            alignItems={"flex-start"}
            sx={{
              paddingTop: "184px",
              width: "100%",
              paddingLeft: "144px",
            }}
          >
            <LoginForm />
          </Grid>
        </Box>
      </Box>
    </>
  );
}
