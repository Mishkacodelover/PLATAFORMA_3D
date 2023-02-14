import ReactPlayer from "react-player";
import VideoTenis from "../../assets/videos/video_preview_h264.mp4";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import imgMain from "../../assets/images/muestraHome.png";
import prvImg from "../../assets/images/fotoMAinProvisionalgastado.jpeg";
import { Box, Typography, Stack } from "@mui/material";

export default function HomeView() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          <Box sx={{ padding: "56px" }}>
            <Typography
              variant="h6"
              sx={{ color: "var(--negro)", textAlign: "center" }}
            >
              Te ayudamos a crear experiencias inmersivas que facilitan la
              comercialización tanto de tus productos digitales, como de los
              físicos. En el primer caso, permitiéndote crear, gestionar y
              vender desde un mismo lugar, y en el segundo, ayudándote a crear
              una réplica virtual del producto físico y visualizarlo de forma
              única para lanzar colecciones o eventos de pasarela.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <img src={prvImg} alt="design" width="1000px" />
          </Box>
        </Box>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: "56px" }}
        >
          <Typography
            variant="h5"
            sx={{ color: "var(--negro)", textAlign: "center" }}
          >
            Regístrate y obtén una prueba gratuita durante 7 días con la
            suscripción Basic
          </Typography>
          <Box sx={{ p: "36px", justifyContent: "center", maxWidth: "70%" }}>
            <RegistrationForm />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
