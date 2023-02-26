import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemButton,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

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
            <ListItem
              sx={{
                backgroundColor: "secondary.light",
              }}
            >
              <ListItemText
                primary={`Nombre de empresa:  ${fiscalData.companyName}`}
                sx={{ color: "common.white" }}
              />

              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  onClick={handleCompanyName}
                  variant="contained"
                  sx={{ backgroundColor: "primary.dark" }}
                >
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            {companyName && (
              <ListItem>
                <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                  <Grid container alignItems={"center"}>
                    <TextField
                      size="small"
                      label="Nombre de la empresa"
                      name="companyName"
                      value={inputData.companyName}
                      onChange={handleInputData}
                    />
                    <ListItemButton sx={{ justifyContent: "flex-end" }}>
                      <Button
                        size="small"
                        type="submit"
                        variant="outlined"
                        sx={{ border: "2px solid" }}
                      >
                        Cambiar
                      </Button>
                    </ListItemButton>
                  </Grid>
                </form>
              </ListItem>
            )}
            <ListItem
              sx={{
                backgroundColor: "primary.dark",
              }}
            >
              <ListItemText
                primary={`CIF/NIF de empresa:  ${fiscalData.vatNumber}`}
                sx={{ color: "common.white" }}
              />
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  onClick={handleVatNumber}
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.light",
                  }}
                >
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>

            {vatNumber && (
              <ListItem>
                <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                  <Grid container alignItems={"center"}>
                    <TextField
                      size="small"
                      label="CIF/NIF de la empresa"
                      name="vatNumber"
                      value={inputData.vatNumber}
                      onChange={handleInputData}
                    />
                    <ListItemButton sx={{ justifyContent: "flex-end" }}>
                      <Button
                        size="small"
                        type="submit"
                        variant="outlined"
                        sx={{ border: "2px solid" }}
                      >
                        Cambiar
                      </Button>
                    </ListItemButton>
                  </Grid>
                </form>
              </ListItem>
            )}
            <ListItem
              sx={{
                backgroundColor: "secondary.light",
              }}
            >
              <ListItemText
                primary={`Dirección fiscal:  ${fiscalData.fiscalAdress}`}
                sx={{ color: "common.white" }}
              />
              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  onClick={handleFiscalAdress}
                  variant="contained"
                  sx={{
                    backgroundColor: "primary.dark",
                  }}
                >
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            {fiscalAdress && (
              <ListItem>
                <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                  <Grid container alignItems={"center"}>
                    <TextField
                      size="small"
                      label="Dirección fiscal"
                      name="fiscalAdress"
                      value={inputData.fiscalAdress}
                      onChange={handleInputData}
                    />
                    <ListItemButton sx={{ justifyContent: "flex-end" }}>
                      <Button
                        size="small"
                        type="submit"
                        variant="outlined"
                        sx={{ border: "2px solid" }}
                      >
                        Cambiar
                      </Button>
                    </ListItemButton>
                  </Grid>
                </form>
              </ListItem>
            )}
            <ListItem
              sx={{
                backgroundColor: "primary.dark",
              }}
            >
              <ListItemText
                primary={`Suscripción:  ${fiscalData.name}`}
                sx={{ color: "common.white" }}
              />

              <ListItemButton sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  onClick={handleSuscription}
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.light",
                  }}
                >
                  Editar
                </Button>
              </ListItemButton>
            </ListItem>
            {suscription && (
              <ListItem>
                <form onSubmit={(event) => updateFiscalData(event, inputData)}>
                  <Grid container alignItems={"center"}>
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
                    <ListItemButton sx={{ justifyContent: "flex-end" }}>
                      <Button
                        size="small"
                        type="submit"
                        variant="outlined"
                        sx={{ border: "2px solid" }}
                      >
                        Cambiar
                      </Button>
                    </ListItemButton>
                  </Grid>
                </form>
              </ListItem>
            )}
          </List>
        ) : (
          <>
            {
              <Grid
                alignItems="center"
                justifyContent={"left"}
                maxWidth="100%"
                sx={{ justifyContent: "space-between" }}
              >
                <Typography
                  variant="h6"
                  sx={{ paddingBottom: "16px", color: "common.black" }}
                >
                  Aún no has registrado tus datos fiscales
                </Typography>
                <form onSubmit={(event) => addFiscalData(event, inputData)}>
                  <Grid item md={12}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="Nombre de la empresa"
                      name="companyName"
                      value={inputData.companyName}
                      onChange={handleInputData}
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="CIF/NIF de la empresa"
                      name="vatNumber"
                      value={inputData.vatNumber}
                      onChange={handleInputData}
                    />
                  </Grid>
                  <Grid item md={12}>
                    <TextField
                      fullWidth
                      variant="standard"
                      label="Dirección fiscal"
                      name="fiscalAdress"
                      value={inputData.fiscalAdress}
                      onChange={handleInputData}
                    />
                  </Grid>
                  <Grid item md={12}>
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
                  <Grid item md={12} sx={{ paddingTop: "16px" }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ backgroundColor: "primary.main" }}
                    >
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
