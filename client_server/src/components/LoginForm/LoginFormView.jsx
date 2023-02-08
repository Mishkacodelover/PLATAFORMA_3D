import { useFormik } from "formik";
import { LoginSchema } from "./LoginSchema";
import { initialValues } from "./utils/inicialValues";
import { TextField, Grid, Button, Typography } from "@mui/material";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function LoginFormView({ register }) {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit,
    });

  return (
    <>
      <Grid sx={{ maxWidth: "100%" }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid
            container
            spacing={2}
            direction="column"
            sx={{ maxWidth: "100%" }}
          >
            <Grid item xs={10} md={6}>
              <TextField
                type="email"
                label="Email"
                name="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={10} md={6}>
              <TextField
                type="password"
                label="Contraseña"
                name="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
                helperText={errors.password}
              />
            </Grid>

            <Grid item xs={10} md={6}>
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                sx={{
                  backgroundImage:
                    "linear-gradient(var(--negro),var(--primario))",
                  color: "var(--blanco)",
                  p: "16px 24px",
                }}
              >
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography>¿No estás registrado?</Typography>
        <p onClick={register}>Crear cuenta</p>
      </Grid>
    </>
  );
}
