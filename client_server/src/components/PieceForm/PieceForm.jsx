import { Grid, TextField, Button, MenuItem, Typography } from "@mui/material";

import { clothes } from "./utils/clothes";
import { sizes } from "./utils/sizes";
import { colors } from "./utils/colors";
import Link from "../../components/Link/Link";
import PatternList from "../../components/PatternList/PatternList";
import ResourceList from "../../components/ResourceList/ResourceList";
import CollectionList from "../../components/CollectionList/CollectionList";
import "@splidejs/react-splide/css";

export default function PieceForm({
  addPiece,
  addFalsePiece,
  handlePiece,
  collection,
  pattern,
  resource,
  patternChecked,
  handlePattern,
  resourceChecked,
  handleResource,
  collectionChecked,
  handleCollection,
  handleOpen,
}) {
  return (
    <>
      <form
        onSubmit={(event) =>
          addFalsePiece(
            event,
            addPiece,

            collectionChecked,
            patternChecked,
            resourceChecked
          )
        }
      >
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
              sx={{ paddingBottom: "44px", paddingTop: "8px" }}
              textAlign="left"
            >
              Elige el tipo de prenda que vas a crear. Puedes asignar a cada
              prenda la colección de ropa a la que pertenece, una talla, la tela
              que quieras, el color, foto y modelo en 3d que vas a necesitar
              para diseñar tu prenda. No te olvides de asignar un código único
              para cada prenda.
            </Typography>
            <Grid item xs={12} md={12}>
              <TextField
                select
                label="Tipo de prenda"
                name="clotheType"
                variant="standard"
                fullWidth
                value={addPiece.clotheType}
                onChange={handlePiece}
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
                  onChange={handlePiece}
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
                  select
                  label="Color"
                  name="color"
                  variant="standard"
                  fullWidth
                  value={addPiece.color}
                  onChange={handlePiece}
                >
                  {colors.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  type="text"
                  label="Tela"
                  name="fabric"
                  variant="standard"
                  fullWidth
                  value={addPiece.fabric}
                  onChange={handlePiece}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                type="text"
                label="Nombre de tu prenda"
                name="clotheName"
                variant="standard"
                fullWidth
                value={addPiece.clotheName}
                onChange={handlePiece}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                onClick={() => handleOpen()}
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
            spacing={4}
            sx={{ justifyContent: "center" }}
          >
            <Grid item md={12}>
              <PatternList
                pattern={pattern}
                patternChecked={patternChecked}
                handlePattern={handlePattern}
              />
            </Grid>
            <Grid item md={12}>
              <ResourceList
                resource={resource}
                resourceChecked={resourceChecked}
                handleResource={handleResource}
              />
            </Grid>
            <Grid item md={12}>
              <CollectionList
                collection={collection}
                collectionChecked={collectionChecked}
                handleCollection={handleCollection}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Link to="/u/piece-all">
                <Button
                  fullWidth
                  type="submit"
                  variant="outlined"
                  sx={{
                    marginTop: "16px",
                    border: "2px solid",
                  }}
                >
                  Ver prendas
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
