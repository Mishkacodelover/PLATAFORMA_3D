import {
  ImageList,
  ImageListItem,
  Typography,
  Box,
  Grid,
  InputBase,
  Button,
  Alert,
} from "@mui/material";
import InternalHeader from "../../components/InternalHeader";

export default function GraficResourcesView({
  resource,
  uploadImage,
  onFileChange,
  alert,
}) {
  return (
    <Box>
      <Grid container maxWidth={"100%"} sx={{ maxHeight: "100%" }}>
        <InternalHeader />
        {alert && <Alert severity="success">¡Imágen añadida con éxito!</Alert>}
        <ImageList
          sx={{ maxWidth: "100%", height: "460px" }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {resource ? (
            resource.map(({ path, name }) => (
              <ImageListItem key={name}>
                <img
                  src={`http://localhost:8000/${path}`}
                  //srcSet={`http:/localhost:8000/${path}`}
                  alt={name}
                  loading="lazy"
                />
              </ImageListItem>
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
          <Grid item md={6} xs={12}>
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
            md={6}
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
                sx={{ backgroundColor: "secondary.light" }}
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
