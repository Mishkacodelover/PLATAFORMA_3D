import { Box, Grid, Button, Typography, InputBase, Alert } from "@mui/material";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import fotoMentira from "../../assets/images/otros/foto_mentira.jpeg";

import "@splidejs/react-splide/css";

export default function PatternView({
  pattern,
  onFileChange,
  uploadPattern,
  alert,
  avatar,
}) {
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container maxWidth={"100%"}>
        <InternalHeader text="Modelos 3d" avatar={avatar} />
        {alert && <Alert severity="success">¡Patrón añadido con éxito!</Alert>}

        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            perPage: 3,
            width: "100%",
            height: "432px",
          }}
          aria-label="My Favorite Images"
        >
          {pattern ? (
            pattern.map((item) => (
              <SplideSlide key={item.id}>
                <img
                  src={`http://localhost:8000/${item.pathPattern}`}
                  alt={item.patternName}
                  width="328px"
                />
              </SplideSlide>
            ))
          ) : (
            <>
              <SplideSlide>
                <img src={fotoMentira} alt=" 1" width="348px" />
              </SplideSlide>
              <SplideSlide>
                <img src={fotoMentira} alt="2" width="348px" />
              </SplideSlide>
              <SplideSlide>
                <img src={fotoMentira} alt="3" width="348px" />
              </SplideSlide>
            </>
          )}
        </Splide>

        <Grid
          container
          maxWidth={"100%"}
          direction={"row"}
          spacing={2}
          sx={{
            marginTop: "8px",
            padding: "16px",
            alignContent: "center",
          }}
        >
          <Grid item md={4} xs={12}>
            <Typography
              color="secondary.dark"
              variant="h6"
              textAlign={"center"}
            >
              Sube los patrones de diseño 3d que necesites
            </Typography>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              paddingBottom: "16px",
              backgroundImage:
                "radial-gradient(var(--primario_oscuro),var(--primario))",
            }}
          >
            <form onSubmit={uploadPattern}>
              <InputBase
                accept="image/*"
                multiple
                type="file"
                value={undefined}
                onChange={onFileChange}
                sx={{
                  color: "common.white",
                  borderRadius: "4px",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "secondary.light", marginLeft: "16px" }}
              >
                Añadir recurso gráfico
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
