import ReactPlayer from "react-player";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Link from "../../components/Link/Link";
import { Box, Typography, Stack, Grid, Button } from "@mui/material";
import Partners from "../../components/Partners/Partners";

import video from "../../assets/videos/video_preview_bolso.mp4";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/skyblue";
import slideOne from "../../assets/images/otros/fotos_coleccion_peq.jpg";
import slideTwo from "../../assets/images/otros/pasarela.jpg";
import slideThree from "../../assets/images/otros/tienda_virtual.jpg";
import slideFour from "../../assets/images/otros/filtros_ar.jpg";
import slideFive from "../../assets/images/otros/ropa_tablet.jpg";
import ContactItems from "../../components/ContactItems/ContactItems";

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
        <Box>
          <Grid
            container
            direcion="row"
            spacing={3}
            sx={{ paddingTop: "36px" }}
          >
            <Grid item md={12} sx={12}>
              <Typography
                variant="h1"
                color="common.black"
                textAlign={"center"}
              >
                Gestionamos tu presencia en web3 y el metaverso
              </Typography>
            </Grid>
            <Grid item md={12} sx={12}>
              <Typography
                variant="h3"
                color="common.black"
                textAlign={"center"}
              >
                Tú pones la idea y nosotros nos encargamos del resto
              </Typography>
            </Grid>
          </Grid>

          {/* <Box sx={{ paddingRight: "378px", paddingLeft: "378px" }}> */}
          <Grid
            container
            direction="row"
            sx={{
              paddingTop: "48px",
              paddingBottom: "48px",
              maxWidth: "100%",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ p: "8px 36px", border: "2px solid" }}
              variant="outlined"
            >
              Reserva una cita
            </Button>
            {/* <Link to="/registration">
                <Button
                  sx={{ p: "8px 32px", border: "2px solid" }}
                  variant="outlined"
                >
                  Ponnos a prueba
                </Button>
              </Link> */}
          </Grid>
          {/* </Box> */}
        </Box>
        <Box>
          <Box>
            <Splide
              options={{
                rewind: true,

                perPage: 3,
                maxWidth: "90%",
                height: "240px",
              }}
              aria-label="My Carousel Images"
            >
              <SplideSlide>
                <img src={slideOne} alt=" 1" width={"436px"} />
                <Typography textAlign={"center"}>
                  {" "}
                  Colección de ropa virtual
                </Typography>
              </SplideSlide>
              <SplideSlide>
                <img src={slideTwo} alt="2" width={"436px"} />
                <Typography textAlign={"center"}>Pasarela virtual</Typography>
              </SplideSlide>
              <SplideSlide>
                <img src={slideThree} alt="3" width={"436px"} />
                <Typography textAlign={"center"}> Tienda virtual</Typography>
              </SplideSlide>
              <SplideSlide>
                <img src={slideFour} alt="4" width={"436px"} />
                <Typography textAlign={"center"}> Filtros AR</Typography>
              </SplideSlide>
              <SplideSlide>
                <img src={slideFive} alt="5" width={"436px"} />
                <Typography textAlign={"center"}>
                  {" "}
                  Producción on-demand
                </Typography>
              </SplideSlide>
            </Splide>
          </Box>
        </Box>
        <Box>
          <Grid container direction="row" maxWidth={"100%"} alignItems="center">
            <Grid item md={6} xs={12}>
              <Typography
                variant="h1"
                textAlign={"center"}
                color="secondary.main"
              >
                PLATAFORMA
              </Typography>
              <Typography
                variant="h2"
                textAlign={"center"}
                color="secondary.main"
              >
                ALL-IN ONE
              </Typography>

              <Typography
                textAlign={"center"}
                variant="h5"
                sx={{ paddingTop: "24px" }}
              >
                La plataforma de creación y gestión de activos
              </Typography>
              <Typography textAlign={"center"} variant="h5">
                para web3 y metavereso.
              </Typography>
              <Grid container sx={{ justifyContent: "center" }}>
                <Link to="/registration">
                  <Button
                    sx={{
                      border: "2px solid",
                      color: "secondary.main",
                      p: "8px",
                      marginTop: "44px",
                    }}
                    variant="outlined"
                  >
                    Pruébala ahora sin compromiso
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12} sx={{ p: "68px" }}>
              <ReactPlayer
                url={video}
                controls={true}
                width="100%"
                height="100%"
                style={{ position: "static" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Grid container maxWidth="100%">
          <Typography
            sx={{ color: "common.black", textAlign: "center", p: "84px" }}
          >
            Te ayudamos a crear experiencias inmersivas que facilitan la
            comercialización tanto de tus productos digitales, como de los
            físicos. En el primer caso, permitiéndote crear, gestionar y vender
            desde un mismo lugar, y en el segundo, ayudándote a crear una
            réplica virtual del producto físico y visualizarlo de forma única
            para lanzar colecciones o eventos de pasarela.
          </Typography>

          <Grid item md={12} xs={12} sx={{ maxWidth: "100%" }}>
            <Partners />
          </Grid>
        </Grid>

        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: "56px" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "common.black",
              textAlign: "center",
              paddingBottom: "44px",
              padding: { xs: "68px" },
            }}
          >
            Regístrate y obtén una prueba gratuita durante 7 días con la
            suscripción Basic
          </Typography>
          <Box
            sx={{
              p: "36px",
              justifyContent: "center",
              maxWidth: { md: "60%", xs: "80%" },
            }}
          >
            <RegistrationForm />
          </Box>
        </Stack>
        <Box>
          <ContactItems />
        </Box>
      </Box>
    </>
  );
}
