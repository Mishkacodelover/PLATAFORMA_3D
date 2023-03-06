import {
  Box,
  Grid,
  Button,
  Typography,
  InputBase,
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import fotoMentira from "../../assets/images/otros/foto_mentira.jpeg";

import "@splidejs/react-splide/css";

export default function PatternView({
  pattern,
  onFileChange,
  uploadPattern,
  alert,
  deletePattern,
  deleteAlert,

  handleClickOpen,
  handleClose,

  open,
}) {
  return (
    <Box sx={{ p: "24px" }}>
      <Grid container maxWidth={"100%"}>
        <InternalHeader text="Modelos 3d" />
        <Box>
          {alert && (
            <Alert severity="success">¡Modelo 3d añadido con éxito!</Alert>
          )}
          {deleteAlert && <Alert severity="success">Imagen eliminada</Alert>}
        </Box>

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
              <>
                <SplideSlide key={item.id}>
                  <img
                    src={`http://localhost:8000/${item.pathPattern}`}
                    alt={item.patternName}
                    width="328px"
                  />
                  <div>
                    <Grid container justifyContent="center">
                      <Button
                        variant="contained"
                        onClick={() => handleClickOpen(item.id)}
                      >
                        Eliminar
                      </Button>
                    </Grid>
                  </div>
                </SplideSlide>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"¿Desea eliminar este modelo 3d?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Al aceptar, el modelo 3d seleccionado será eliminado de la
                      lista. Si este resurso gráfico lo está utilizando en
                      alguna prenda, primero tiene que eliminar la prenda, para
                      poder eliminar el modelo 3d.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={deletePattern} autoFocus>
                      Aceptar
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
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
