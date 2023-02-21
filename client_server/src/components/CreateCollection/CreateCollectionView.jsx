import { Grid, Box, TextField, MenuItem, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { typeCollection } from "./utils/typeCollection";
import { useState } from "react";

export default function CreateCollectionView({
  addCollection,
  handleCollection,
  addCollectionData,
}) {
  const [initialDate, setInitialDate] = useState(dayjs("2022-04-07"));
  const [finalDate, setFinalDate] = useState(dayjs("2022-04-07"));

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
                  openTo="day"
                  views={["date", "month", "year"]}
                  label="Fecha de inicio"
                  value={initialDate}
                  onChange={(newValue) => {
                    setInitialDate(newValue);
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
                  openTo="day"
                  views={["date", "month", "year"]}
                  label="Fecha de fin"
                  value={finalDate}
                  onChange={(newValue) => {
                    setFinalDate(newValue);
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
