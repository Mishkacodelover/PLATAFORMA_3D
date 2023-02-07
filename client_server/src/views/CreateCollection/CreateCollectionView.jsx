import {
  Typography,
  Container,
  Grid,
  Box,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function CreateCollectionView({
  typeCollection,
  collectionUse,
}) {
  const [noShow, setNoShow] = useState(false);

  return (
    <>
      <Container maxWidth="100%">
        <Box sx={{ paddingTop: "36px" }}>
          <Typography variant="h4" textAlign="center">
            Empieza a crear tu colección de ropa
          </Typography>
          <Grid
            sx={{
              paddingTop: "36px",
              maxWidth: "100%",
            }}
          >
            <form>
              <Grid item xs={10} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Ponle nombre a tu colección"
                  name="collection_name"
                />
              </Grid>

              <Grid item xs={10} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Tipo de colección"
                  name="collection_type"
                >
                  {typeCollection.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={10} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Lugar para tu colección"
                  name="collection_use"
                >
                  {collectionUse.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </form>
          </Grid>
          <Grid item sx={10} md={6}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--primario)",
                backgroundImage:
                  "radial-gradient(var(--primario),var(--negro))",
                padding: "12px",
              }}
              onClick={() => setNoShow(!noShow)}
            >
              Siguiente
            </Button>
          </Grid>
        </Box>
        {noShow && <p>hola</p>}
      </Container>
    </>
  );
}
