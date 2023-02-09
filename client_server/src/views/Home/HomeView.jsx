import ReactPlayer from "react-player";
import VideoTenis from "../../assets/videos/video_preview-mujer.mp4";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Box, Typography, Stack } from "@mui/material";

export default function HomeView() {
  return (
    <>
      <Box
        sx={
          {
            //   maxWidth: "100%",
            //   maxHeight: "548px",
            //   overflow: "hidden",
          }
        }
      >
        <ReactPlayer
          url={VideoTenis}
          controls
          loop
          width="100%"
          height="100%"
          style={{ position: "static" }}
        />
      </Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: "36px" }}
      >
        <Typography
          variant="h5"
          sx={{ color: "var(--negro)", textAlign: "center" }}
        >
          Regístrate y obtén una prueba gratuita durante 7 días con la
          suscripción Basic
        </Typography>
        <Box sx={{ p: "36px", justifyContent: "center" }}>
          <RegistrationForm />
        </Box>
      </Stack>
    </>
  );
}
