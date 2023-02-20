import { Box, Grid, Typography, Button } from "@mui/material";
import InternalHeader from "../../components/InternalHeader/InternalHeader";
import CreateCollection from "../../components/CreateCollection";

export default function CollectionView({
  collection,
  createCollection,
  handleCollection,
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

          {collection ? (
            collection.map(
              ({ collectionName, collectionType, initialDate, finishDate }) => (
                <Grid
                  container
                  direction="row"
                  alignItems={"center"}
                  sx={{ border: "1px solid black", p: "16px" }}
                >
                  <Grid item md={11} container direction="row">
                    <Grid item md={6}>
                      <Typography>
                        Nombre de la colección: {collectionName}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography>
                        Tipo de colección: {collectionType}
                      </Typography>
                    </Grid>

                    <Grid item md={6}>
                      <Typography>
                        Fecha de inicio de la colección: {initialDate}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography>
                        Fecha de fin de la colección: {finishDate}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item md={1}>
                    <Button size="small">Editar</Button>
                    <Button size="small">Ver</Button>
                  </Grid>
                </Grid>
              )
            )
          ) : (
            <Grid item md={6}>
              <Typography>Todavía no tienes colecciones de ropa</Typography>
            </Grid>
          )}
          <Grid item sx={{ paddingTop: "16px" }}>
            <Button onClick={handleCollection}>Crear colección de ropa</Button>
          </Grid>
          {createCollection && (
            <Grid item>
              <CreateCollection />
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}
