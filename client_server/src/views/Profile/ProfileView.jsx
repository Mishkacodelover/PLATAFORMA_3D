import { Box, Grid } from "@mui/material";
import UserData from "../../components/UserData";
import CompleteData from "../../components/CompleteData";

import ProfileAvatar from "../../components/ProfileAvatars/ProfileAvatar";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import WhiteWomanImg from "../../assets/images/mujer_claro.jpg";

export default function ProfileView() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${WhiteWomanImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container maxWidth={"100%"} sx={{ maxHeight: "100%" }}>
        <InternalHeader />
        <Grid
          container
          sx={{
            border: "1px solid black",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Grid item xs={10} md={7} sx={{ border: "1px solid black" }}>
            <UserData />
          </Grid>
          <Grid item xs={10} md={5} sx={{ border: "1px solid black" }}>
            <CompleteData />
          </Grid>
          <Grid item xs={10} md={7} sx={{ border: "1px solid black" }}>
            <ProfileAvatar />
          </Grid>
          <Grid item xs={10} md={5} sx={{ border: "1px solid black" }}>
            <ProfileImage />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
