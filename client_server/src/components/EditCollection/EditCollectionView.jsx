import { Box, Grid, TextField, MenuItem, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { typeCollection } from "../CreateCollection/utils/typeCollection";

export default function EditCollectionView({
  editCollection,
  collectionEdited,
  setEditCollection,
  updateCollection,
  handleToggle,
}) {
  return (
    <Box>
      <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
        <form onSubmit={(event) => updateCollection(event, editCollection)}>
          <Grid item md={12}>
            <TextField
              fullWidth
              variant="standard"
              label="Nombre de la colección"
              name="collectionName"
              value={editCollection.collectionName}
              onChange={collectionEdited}
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
              value={editCollection.collectionType}
              onChange={collectionEdited}
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
                openTo="day"
                views={["day"]}
                label="Fecha de inicio"
                name="initialDate"
                value={editCollection.initialDate}
                onChange={(newValue) => {
                  setEditCollection({
                    ...editCollection,
                    initialDate: newValue,
                  });
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item md={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                openTo="day"
                views={["day"]}
                label="Fecha de fin"
                value={editCollection.finishDate}
                name="finishDate"
                onChange={(newValu) => {
                  setEditCollection({
                    ...editCollection,
                    finishDate: newValu,
                  });
                }}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item md={12}>
            <Button
              onClick={handleToggle}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: "16px" }}
            >
              Editar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
}
