import { useFormik } from "formik";
import { RegistrationFormSchema } from "./RegistrationForm_schema";
import { initialValues } from "./utils/form";
import { TextField, Grid, MenuItem, Button } from "@mui/material";
import { options } from "./utils/options";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function RegistrationForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: RegistrationFormSchema,
      onSubmit,
    });

  return (
    <>
      <Grid direction="column" sx={{ maxWidth: "80%" }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid
            container
            justifyContent="space-evenly"
            spacing={2}
            sx={{ maxWidth: "100%" }}
          >
            {/* <Grid item xs={10} md={6}>
              <TextField
                type="text"
                label="Nombre"
                name="name"
                variant="outlined"
                fullWidth
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <TextField
                type="text"
                label="Apellidos"
                name="surname"
                variant="outlined"
                fullWidth
                value={values.surname}
                onChange={handleChange}
                error={errors.surname}
                helperText={errors.surname}
              />
            </Grid> */}
            <Grid item xs={10} md={6}>
              <TextField
                type="email"
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <TextField
                select
                label="Suscripción"
                name="suscription"
                variant="outlined"
                fullWidth
                value={values.suscription}
                onChange={handleChange}
                error={errors.suscription}
                helperText={errors.suscription}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={10} md={6}>
              <TextField
                type="password"
                label="Contraseña"
                name="password"
                variant="outlined"
                fullWidth
                value={values.password}
                onChange={handleChange}
                error={errors.password}
                helperText={errors.password}
              />
            </Grid>

            <Grid item xs={10} md={6}>
              <TextField
                type="password"
                label="Confirma tu contraseña"
                name="confirmPassword"
                variant="outlined"
                fullWidth
                value={values.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>

            <Grid item xs={10} md={12}>
              <Button
                disabled={isSubmitting}
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundImage:
                    "linear-gradient(var(--negro),var(--primario))",
                  color: "var(--blanco)",
                  p: "16px 24px",
                }}
              >
                Registrarme
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
