import { Box, Grid, Button } from "@mui/material";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import imagenUno from "../../assets/images/vestidos/vestido_cinco.jpg";
import imagenDos from "../../assets/images/vestidos/vestido_cuatro.jpg";
import imagenTres from "../../assets/images/vestidos/vestido_seis.jpg";
import imagenCuatro from "../../assets/images/vestidos/vestido_dos.jpg";
import imagenCinco from "../../assets/images/vestidos/vestido_uno.jpg";
import imagenSeis from "../../assets/images/vestidos/vestido_siete.jpg";
import "@splidejs/react-splide/css";

export default function PatternView() {
  return (
    <Box>
      <Grid>
        <InternalHeader text="Modelos 3d" />

        <Splide
          options={{
            rewind: true,
            gap: "5rem",
            perPage: 3,
            maxWidth: "100%",
            height: "426px",
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img src={imagenUno} alt=" 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={imagenDos} alt="2" />
          </SplideSlide>
          <SplideSlide>
            <img src={imagenTres} alt="3" />
          </SplideSlide>
          <SplideSlide>
            <img src={imagenCuatro} alt="4" />
          </SplideSlide>
          <SplideSlide>
            <img src={imagenCinco} alt="5" />
          </SplideSlide>
          <SplideSlide>
            <img src={imagenSeis} alt="6" />
          </SplideSlide>
        </Splide>

        <Grid
          item
          sx={{
            justifyContent: "center",
            paddingTop: "24px",
            alignItems: "center",
          }}
        >
          <Button variant="contained" component="label">
            Añadir recurso gráfico
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
