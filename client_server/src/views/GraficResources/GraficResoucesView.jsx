import {
  ImageList,
  ImageListItem,
  Typography,
  Box,
  Grid,
  InputBase,
  Button,
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InternalHeader from "../../components/InternalHeader";
import DeleteIcon from "@mui/icons-material/Delete";

export default function GraficResourcesView({
  resource,
  uploadImage,
  onFileChange,
  alert,
  avatar,
  deleteAlert,
  deleteResource,
  errorAlert,
  handleClickOpen,
  handleClose,
  open,
}) {
  return (
    <Box>
      <Grid container maxWidth={"100%"} sx={{ maxHeight: "100%" }}>
        <InternalHeader avatar={avatar} />
        <Box>
          {alert && (
            <Alert severity="success">¡Imágen añadida con éxito!</Alert>
          )}
          {deleteAlert && <Alert severity="success">Imagen eliminada</Alert>}
          {errorAlert && (
            <Alert severity="error">
              Error al eliminar imagen, compruebe que no esté utilizando este
              recurso en ninguna colección de ropa
            </Alert>
          )}
        </Box>
        <ImageList
          sx={{ maxWidth: "100%", height: "460px" }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {resource ? (
            resource.map(({ path, name, id }) => (
              <>
                <ImageListItem key={id}>
                  <img
                    src={`http://localhost:8000/${path}`}
                    alt={name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={`Nombre: ${name}`}
                    sx={{
                      // backgroundColor: "rgba(221, 194, 231)",
                      // background:
                      //   "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      //   "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      color: "primary.dark",
                      backgroundImage:
                        "linear-gradient(var(--primario_claro),var(--blanco))",
                    }}
                    // subtitle={item.author}
                    actionIcon={
                      <IconButton
                        onClick={() => handleClickOpen(id)}
                        sx={{
                          color: "common.white",
                        }}
                        // aria-label={`info about ${item.title}`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"¿Desea eliminar esta imagen?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Al aceptar, la imagen seleccionada será eliminada de la
                      lista. Si este resurso gráfico lo está utilizando en
                      alguna prenda, primero tiene que eliminar la prenda, para
                      poder eliminar la imagen.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={() => deleteResource(id)} autoFocus>
                      Aceptar
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            ))
          ) : (
            <Typography
              variant="h5"
              color="common.black"
              textAlign="center"
              sx={{ paddingLeft: "36px" }}
            >
              Aún no has subido imágenes
            </Typography>
          )}
        </ImageList>
        <Grid
          container
          maxWidth={"100%"}
          direction={"row"}
          spacing={2}
          sx={{
            padding: "16px",
            alignContent: "center",
          }}
        >
          <Grid item md={5} xs={12}>
            <Typography
              color="secondary.dark
            "
              variant="h6"
              textAlign={"center"}
            >
              Sube las fotos de las prendas que quieras diseñar
            </Typography>
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            sx={{
              paddingBottom: "8px",

              backgroundImage:
                "radial-gradient(var(--primario_oscuro),var(--primario))",
            }}
          >
            <form onSubmit={uploadImage}>
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
                sx={{
                  backgroundColor: "secondary.light",
                  marginLeft: "16px",
                  marginBottom: "8px",
                }}
              >
                Subir imagen
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
