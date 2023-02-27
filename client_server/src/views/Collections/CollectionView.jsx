import {
  Box,
  Grid,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  Alert,
  Stack,
} from "@mui/material";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import CreateCollection from "../../components/CreateCollection";
import EditCollection from "../../components/EditCollection";
import CollectionUse from "../../components/CollectionUse/CollectionUse";
import dayjs from "dayjs";
import { style } from "../../const/modalStyle";

export default function CollectionView({
  addCollection,
  addCollectionData,
  alert,
  collection,
  collectionEdited,

  createCollection,
  deleteCollection,
  deleteAlert,
  editCollection,
  handleCollection,
  handleCollectionOpen,
  handleCloseEditCollection,
  handleOpenEditCollection,
  openEditCollection,
  setAlert,
  setAddCollection,
  setEditCollection,
  updateCollection,
  use,
  handleUse,
  openCollectionUse,
  handleCloseCollectionUse,
  handleOpenCollectionUse,
  addCollectionUse,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        <Grid
          container
          direction="column"
          maxWidth={"100%"}
          sx={{
            maxHeight: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InternalHeader text="Mis Colecciones" />
          {alert && (
            <Alert severity="success">¡Colección creada con éxito!</Alert>
          )}

          {collection ? (
            collection.map((col) => (
              <Grid
                container
                direction="row"
                // justifyItems={"center"}
                alignItems="flex-start"
                spacing={1}
                sx={{
                  p: "16px",
                  boxShadow: "2px 2px 2px 1px var(--azul_oscuro)",
                }}
              >
                <Grid item md={9} container direction="row">
                  <Grid item md={6}>
                    <Typography>
                      Nombre de la colección: {col.collectionName}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography>
                      Tipo de colección: {col.collectionType}
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <Typography>
                      Fecha de inicio de la colección:{" "}
                      {dayjs(col.initialDate).format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography>
                      Fecha de fin de la colección:{" "}
                      {dayjs(col.finishDate).format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
                  {col.name ? (
                    <Grid item md={6}>
                      <Typography>Uso de la colección:{col.name}</Typography>
                    </Grid>
                  ) : (
                    <Grid item md={6}>
                      <Typography> Aún no has asignado un uso</Typography>
                    </Grid>
                  )}
                  {col.description ? (
                    <Grid item md={6}>
                      <Typography>Descripción: {col.description}</Typography>
                    </Grid>
                  ) : (
                    <Grid item md={6}>
                      <Typography>No hay ninguna descripción</Typography>
                    </Grid>
                  )}
                </Grid>
                <Grid item md={3}>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "2px solid",
                      p: "4px 16px",
                      color: "secondary.main",
                      marginRight: "4px",
                    }}
                    size="small"
                    onClick={() => handleOpenCollectionUse(col.id)}
                  >
                    Añadir uso
                  </Button>
                  <Modal
                    aria-labelledby="add-collectionuse-form"
                    aria-describedby="add-collectionuse-form"
                    open={openCollectionUse}
                    onClose={handleCloseCollectionUse}
                    closeAfterTransition
                    slots={Backdrop}
                    slotsProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openCollectionUse}>
                      <Box sx={style}>
                        <CollectionUse
                          use={use}
                          handleUse={handleUse}
                          addCollectionUse={addCollectionUse}
                        />
                      </Box>
                    </Fade>
                  </Modal>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "2px solid",
                      p: "4px 16px",
                      color: "secondary.main",
                      marginRight: "4px",
                    }}
                    size="small"
                    onClick={() => handleOpenEditCollection(col.id)}
                  >
                    Editar
                  </Button>
                  <Modal
                    aria-labelledby="open-edirUser-form"
                    aria-describedby="open-editUser-form"
                    open={openEditCollection}
                    onClose={handleCloseEditCollection}
                    closeAfterTransition
                    slots={Backdrop}
                    slotsProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openEditCollection}>
                      <Box sx={style}>
                        <EditCollection
                          editCollection={editCollection}
                          collectionEdited={collectionEdited}
                          setEditCollection={setEditCollection}
                          updateCollection={updateCollection}
                        />
                      </Box>
                    </Fade>
                  </Modal>
                  <Button
                    size="small"
                    onClick={() => deleteCollection(col.id)}
                    variant="outlined"
                    sx={{ border: "2px solid", p: "4px 16px" }}
                  >
                    Eliminar
                  </Button>
                  {deleteAlert && (
                    <Alert severity="success">Colección eliminada</Alert>
                  )}
                </Grid>
              </Grid>
            ))
          ) : (
            <Grid item md={12}>
              <Typography>Todavía no tienes colecciones de ropa</Typography>
            </Grid>
          )}
          <Grid item sx={{ paddingTop: "16px" }} md={10}>
            <Button
              onClick={handleCollectionOpen}
              variant="contained"
              sx={{ p: "8px 44px" }}
            >
              Crear colección de ropa
            </Button>
          </Grid>
        </Grid>
        {createCollection && (
          <Stack justifyContent="center" alignItems="center">
            <Box sx={{ width: "70%" }}>
              <CreateCollection
                setAddCollection={setAddCollection}
                addCollectionData={addCollectionData}
                addCollection={addCollection}
                handleCollection={handleCollection}
              />
            </Box>
          </Stack>
        )}
      </Box>
    </>
  );
}
