import { Grid, TextField, MenuItem, Button } from "@mui/material";
import { rolValues } from "./utils/rolValues";

export default function EditUserView({
  inputData,
  handleInputData,
  updateUser,
  handleToggleCircleEdit,
}) {
  return (
    <>
      <Grid container direction={"column"} spacing={2}>
        <form onSubmit={(event) => updateUser(event, inputData)}>
          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Nombre"
              name="name"
              value={inputData.name}
              onChange={handleInputData}
            />
          </Grid>
          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Apellidos"
              name="surname"
              value={inputData.surname}
              onChange={handleInputData}
            />
          </Grid>
          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              variant="standard"
              type="email"
              label="Correo electrónico"
              name="email"
              value={inputData.email}
              onChange={handleInputData}
            />
          </Grid>

          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              type="password"
              label="Contraseña"
              name="password"
              variant="standard"
              value={inputData.password}
              onChange={handleInputData}
            />
          </Grid>
          <Grid item xs={8} md={12}>
            <TextField
              select
              label="Rol"
              name="role"
              defaultValue="administrador"
              variant="standard"
              fullWidth
              size="medium"
              value={inputData.role}
              onChange={handleInputData}
            >
              {rolValues.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={8} md={12} sx={{ paddingTop: "8px" }}>
            <Button
              onClick={() => handleToggleCircleEdit()}
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundImage:
                  "linear-gradient(var(--azul) ,var(--primario))",

                color: "common.white",
                p: "8px 24px",
              }}
            >
              Editar
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
