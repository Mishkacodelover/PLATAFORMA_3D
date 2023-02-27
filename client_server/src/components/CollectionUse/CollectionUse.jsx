import { Button, Grid, TextField, MenuItem } from "@mui/material";
import { useOptions } from "./utils/useOptions";

export default function CollectionUse({ use, handleUse, addCollectionUse }) {
  return (
    <>
      <form onSubmit={(event) => addCollectionUse(event, use)}>
        <Grid container maxWidth={"100%"}>
          <Grid item md={12}>
            <TextField
              select
              fullWidth
              size="small"
              name="use"
              value={use.uses}
              onChange={handleUse}
              variant="standard"
            >
              {useOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              size="small"
              label="Breve descripción"
              name="description"
              value={use.description}
              onChange={handleUse}
              multiline
              rows={4}
              variant="standard"
            />
          </Grid>
          <Grid item md={12}>
            <Button type="submit" variant="contained" fullWidth>
              Añadir uso de la colección
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
