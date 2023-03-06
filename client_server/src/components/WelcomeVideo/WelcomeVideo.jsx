import ReactPlayer from "react-player";
import video from "../../assets/videos/METAPLATAFORM.mp4";
import { Grid } from "@mui/material";

export default function WelcomeVideo() {
  return (
    <>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "flex-start",
          p: "24px",
          maxWidth: "100%",
        }}
      >
        <ReactPlayer
          url={video}
          controls
          playing
          width="100%"
          height="100%"
          style={{ position: "static" }}
        />
      </Grid>
    </>
  );
}
