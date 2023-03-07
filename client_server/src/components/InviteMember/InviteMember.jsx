import { Grid, TextField, MenuItem, Button } from "@mui/material";

import { memberValues } from "./utils/memberValues";

export default function InviteMember({
  handleSubmit,
  values,
  handleChange,
  errors,
  isSubmitting,

  handleToggleCircle,
}) {
  return (
    <>
      <Grid container direction={"column"} spacing={2}>
        <form onSubmit={handleSubmit}>
          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Nombre"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="Apellidos"
              name="surname"
              value={values.surname}
              onChange={handleChange}
              error={errors.surname}
              helperText={errors.surname}
            />
          </Grid>
          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              variant="standard"
              type="email"
              label="Correo electrónico"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={8} md={12}>
            <TextField
              fullWidth
              type="password"
              label="Contraseña"
              name="password"
              variant="standard"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              helperText={errors.password}
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
              value={values.role}
              onChange={handleChange}
              error={errors.role}
              helperText={errors.role}
            >
              {memberValues.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={8} md={12} sx={{ paddingTop: "16px" }}>
            <Button
              onClick={() => handleToggleCircle()}
              disabled={isSubmitting}
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
              Invitar miembro
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
