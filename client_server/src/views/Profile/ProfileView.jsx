import { Box, Grid } from "@mui/material";
import UserData from "../../components/UserData";

import Welcome from "../../components/Welcome/Welcome";
import ProfileImage from "../../components/ProfileImage";
import InternalHeader from "../../components/InternalHeader/InternalHeader";

import WelcomeVideo from "../../components/WelcomeVideo/WelcomeVideo";

export default function ProfileView() {
  return (
    <Box>
      <Grid container maxWidth={"100%"} sx={{ maxHeight: "100%" }}>
        <InternalHeader />
        <Grid
          container
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Grid item xs={10} md={7}>
            <Welcome />
          </Grid>
          <Grid item xs={10} md={5}>
            <WelcomeVideo />
          </Grid>

          <Grid item xs={10} md={7}>
            <UserData />
          </Grid>
          <Grid item xs={10} md={5}>
            <ProfileImage />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
