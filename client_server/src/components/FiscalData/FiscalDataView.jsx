import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  ListItemButton,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { suscriptions } from "./utils/suscOption";

export default function FiscalDataView({
  fiscalData,
  companyName,

  inputData,
  handleInputData,
  updateFiscalData,
  vatNumber,
  fiscalAdress,

  addFiscalData,
  suscription,

  handleCompanyName,
  handleVatNumber,
  handleFiscalAdress,
  handleSuscription,
}) {
  return (
    <>
      <Box sx={{ p: "24px" }}>
        {fiscalData ? (
          <List>
            <ListItem>
              <ListItemText
                primary={`Nombre de empresa:  ${fiscalData.companyName}`}
              />

              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small" onClick={handleCompanyName}>
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            {companyName && (
              <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                <TextField
                  size="small"
                  label="nombre de la empresa"
                  name="companyName"
                  value={inputData.companyName}
                  onChange={handleInputData}
                />
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            )}
            <ListItem>
              <ListItemText
                primary={`CIF/NIF de empresa:  ${fiscalData.vatNumber}`}
              />
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small" onClick={handleVatNumber}>
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>

            {vatNumber && (
              <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                <TextField
                  size="small"
                  label="CIF/NIF de la empresa"
                  name="vatNumber"
                  value={inputData.vatNumber}
                  onChange={handleInputData}
                />
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            )}
            <ListItem>
              <ListItemText
                primary={`Dirección fiscal:  ${fiscalData.fiscalAdress}`}
              />
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small" onClick={handleFiscalAdress}>
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            {fiscalAdress && (
              <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                <TextField
                  size="small"
                  label="Dirección fiscal"
                  name="fiscalAdress"
                  value={inputData.fiscalAdress}
                  onChange={handleInputData}
                />
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            )}
            <ListItem>
              <ListItemText primary={`Suscripción:  ${fiscalData.name}`} />

              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button size="small" onClick={handleSuscription}>
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            {suscription && (
              <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                <TextField
                  select
                  size="small"
                  name="suscription"
                  variant="standard"
                  value={inputData.suscription}
                  onChange={handleInputData}
                >
                  {suscriptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </form>
            )}
          </List>
        ) : (
          <>
            {
              <Grid
                container
                direction="column"
                spacing={2}
                alignItems="center"
                justifyContent={"left"}
              >
                <Typography>
                  Aún no has registrado tus datos fiscales
                </Typography>
                <form onSubmit={(event) => addFiscalData(event, inputData)}>
                  <Grid item md={10}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="Nombre de la empresa"
                      name="companyName"
                      value={inputData.companyName}
                      onChange={handleInputData}
                    />
                  </Grid>
                  <Grid item md={10}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="CIF/NIF de la empresa"
                      name="vatNumber"
                      value={inputData.vatNumber}
                      onChange={handleInputData}
                    />
                  </Grid>
                  <Grid item md={10}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="Dirección fiscal"
                      name="fiscalAdress"
                      value={inputData.fiscalAdress}
                      onChange={handleInputData}
                    />
                  </Grid>
                  <Grid item md={10}>
                    <TextField
                      select
                      label="Suscripción"
                      name="suscription"
                      defaultValue="Basic"
                      variant="standard"
                      fullWidth
                      size="small"
                      value={inputData.suscription}
                      onChange={handleInputData}
                    >
                      {suscriptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={10}>
                    <Button type="submit" fullWidth>
                      Registrar datos
                    </Button>
                  </Grid>
                </form>
              </Grid>
            }
          </>
        )}
      </Box>
    </>
  );
}
