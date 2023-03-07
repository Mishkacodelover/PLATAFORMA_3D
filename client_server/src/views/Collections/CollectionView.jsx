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
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import CreateCollection from "../../components/CreateCollection";
import EditCollection from "../../components/EditCollection";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "../../components/Link/Link";
import dayjs from "dayjs";
import { style } from "../../const/modalStyle";

export default function CollectionView({
  addCollection,
  addCollectionData,
  alert,
  alertError,
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
  open,
  openCircleTwo,
  setAddCollection,
  setEditCollection,
  updateCollection,
  handleToggle,
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
          {deleteAlert && <Alert severity="success">Colección eliminada</Alert>}
          {alertError && (
            <Alert severity="error">El nombre de la colección ya existe</Alert>
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
        {open && (
          <CircularProgress
            sx={{ position: "absolute", top: "40%", left: "55%" }}
          />
        )}
        {createCollection && (
          <Stack justifyContent="center" alignItems="center">
            <Box sx={{ width: "70%" }}>
              <CreateCollection
                setAddCollection={setAddCollection}
                addCollectionData={addCollectionData}
                addCollection={addCollection}
                handleCollection={handleCollection}
                handleToggle={handleToggle}
              />
            </Box>
          </Stack>
        )}
        <Grid sx={{ paddingTop: "24px" }}>
          {openCircleTwo && (
            <CircularProgress
              sx={{ position: "absolute", top: "40%", left: "55%" }}
            />
          )}
          {collection ? (
            collection.map((col) => (
              <Grid
                key={col.id}
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
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
                      Fecha de inicio de la colección:
                      {dayjs(col.initialDate).format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography>
                      Fecha de fin de la colección:
                      {dayjs(col.finishDate).format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>
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
                          handleToggle={handleToggle}
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

                  <Link to={`/u/collection-piece/${col.id}`}>
                    <Tooltip title="Ver prendas">
                      <IconButton>
                        <VisibilityIcon sx={{ color: "secondary.main" }} />
                      </IconButton>
                    </Tooltip>
                  </Link>
                </Grid>
              </Grid>
            ))
          ) : (
            <Grid item md={12}>
              <Typography
                variant="h5"
                textAlign={"center"}
                color="secondary.dark"
              >
                Todavía no tienes colecciones de ropa
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}
