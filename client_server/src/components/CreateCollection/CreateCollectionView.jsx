import { Grid, Box, TextField, MenuItem, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { typeCollection } from "./utils/typeCollection";

export default function CreateCollectionView({
  addCollection,
  handleCollection,
  addCollectionData,
  setAddCollection,
}) {
  return (
    <>
      <Box>
        <Grid container direction="row" spacing={2} alignItems="center">
          <form onSubmit={(event) => addCollectionData(event, addCollection)}>
            <Grid item md={12}>
              <TextField
                fullWidth
                variant="standard"
                label="Nombre de la colección"
                name="collectionName"
                value={addCollection.collectionName}
                onChange={handleCollection}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                select
                label="Tipo de colección"
                name="collectionType"
                variant="standard"
                fullWidth
                size="small"
                value={addCollection.collectionType}
                onChange={handleCollection}
              >
                {typeCollection.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item md={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  openTo="year"
                  views={["year", "month", "day"]}
                  label="Fecha de inicio"
                  name="initialDate"
                  value={addCollection.initialDate}
                  onChange={(newValue) => {
                    setAddCollection({
                      ...addCollection,
                      initialDate: newValue,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText={null}
                      variant="standard"
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  openTo="year"
                  views={["year", "month", "day"]}
                  label="Fecha de fin"
                  value={addCollection.finalDate}
                  name="finishDate"
                  onChange={(newValue) => {
                    setAddCollection({
                      ...addCollection,
                      finishDate: newValue,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText={null}
                      variant="standard"
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item md={12}>
              <Button type="submit" fullWidth>
                Crear colección
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </>
  );
}
