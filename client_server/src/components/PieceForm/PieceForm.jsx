import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import Link from "../../components/Link/Link.jsx";
import { clothes } from "./utils/clothes";
import { sizes } from "./utils/sizes";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import fotoMentira from "../../assets/images/otros/foto_mentira.jpeg";
import "@splidejs/react-splide/css";

export default function PieceForm({
  addPiece,
  addFalsePiece,
  handlePiece,
  collection,
  pattern,
  resource,
  patternAdded,
  resourceAdded,
  collectionAdded,
}) {
  return (
    <>
      <Grid
        container
        direction="row"
        maxWidth={"100%"}
        alignItems="flex-end"
        spacing={4}
      >
        <Grid item md={6}>
          <Typography
            variant="h6"
            color="secondary.dark"
            sx={{ paddingBottom: "48px" }}
            textAlign="left"
          >
            Elige el tipo de prenda que vas a crear. Puedes asignar a cada
            prenda la colección de ropa a la que pertenece, una talla, la tela
            que quieras, el color, foto y modelo en 3d que vas a necesitar para
            diseñar tu prenda. No te olvides de asignar un código único para
            cada prenda.
          </Typography>
          <Grid item xs={12} md={12}>
            <TextField
              select
              label="Tipo de prenda"
              name="clotheType"
              variant="standard"
              fullWidth
              value={addPiece.clotheType}
              onChange={(event) => handlePiece(event)}
            >
              {clothes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Grid item xs={12} md={12}>
              <TextField
                select
                label="Talla"
                name="size"
                variant="standard"
                fullWidth
                value={addPiece.size}
                onChange={(event) => handlePiece(event)}
              >
                {sizes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                type="text"
                label="Color"
                name="color"
                variant="standard"
                fullWidth
                value={addPiece.color}
                onChange={(event) => handlePiece(event)}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                type="text"
                label="Tela"
                name="fabric"
                variant="standard"
                fullWidth
                value={addPiece.fabric}
                onChange={(event) => handlePiece(event)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              type="text"
              label="Código identificador"
              name="code"
              variant="standard"
              fullWidth
              value={addPiece.code}
              onChange={(event) => handlePiece(event)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              onClick={(event) => addFalsePiece(event)}
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "common.white",
                marginTop: "16px",
              }}
            >
              Crear prenda
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          md={6}
          container
          spacing={2}
          sx={{ justifyContent: "center" }}
        >
          <Grid item md={12}>
            <Box sx={{ textAlign: "center" }}>
              <Splide
                options={{
                  rewind: true,
                  gap: "1rem",
                  perPage: 1,
                  width: "100%",
                  height: "148px",
                }}
                aria-label="My Favorite Images"
              >
                {pattern ? (
                  pattern.map((item) => (
                    <SplideSlide
                      key={item.id}
                      onClick={() => patternAdded(item.id)}
                    >
                      <Link to="">
                        <img
                          src={`http://localhost:8000/${item.pathPattern}`}
                          alt={item.patternName}
                          width="200px"
                        />
                      </Link>
                    </SplideSlide>
                  ))
                ) : (
                  <>
                    <SplideSlide>
                      <img src={fotoMentira} alt=" 1" width="200px" />
                    </SplideSlide>
                  </>
                )}
              </Splide>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box sx={{ textAlign: "center" }}>
              <Splide
                options={{
                  rewind: true,
                  gap: "1rem",
                  perPage: 1,
                  width: "100%",
                  height: "148px",
                }}
                aria-label="My Favorite Images"
              >
                {resource ? (
                  resource.map((item) => (
                    <SplideSlide
                      key={item.id}
                      onClick={() => resourceAdded(item.id)}
                    >
                      <Link to="">
                        <img
                          src={`http://localhost:8000/${item.path}`}
                          alt={item.patternName}
                          width="200px"
                        />
                      </Link>
                    </SplideSlide>
                  ))
                ) : (
                  <>
                    <SplideSlide>
                      <img src={fotoMentira} alt=" 1" width="200px" />
                    </SplideSlide>
                  </>
                )}
              </Splide>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                perPage: 1,
                width: "100%",
                height: "124px",
              }}
              aria-label="My Favorite Images"
            >
              {collection ? (
                collection.map((item) => (
                  <SplideSlide
                    key={item.id}
                    onClick={() => collectionAdded(item.id)}
                  >
                    <Link to="">
                      <Box
                        sx={{
                          p: "38px",

                          backgroundImage:
                            "radial-gradient(var(--primario_oscuro),var(--primario))",
                          borderRadius: "4px",
                        }}
                      >
                        <Typography color="common.white" textAlign={"center"}>
                          Nombre de Colección :{item.collectionName}
                        </Typography>
                        <Typography color="common.white" textAlign="center">
                          Tipo de Colección:
                          {item.collectionType}
                        </Typography>
                      </Box>
                    </Link>
                  </SplideSlide>
                ))
              ) : (
                <>
                  <SplideSlide>
                    <img src={fotoMentira} alt=" 1" width="200px" />
                  </SplideSlide>
                </>
              )}
            </Splide>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
