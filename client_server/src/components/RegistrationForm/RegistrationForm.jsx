import { useFormik } from "formik";
import { RegistrationFormSchema } from "./RegistrationForm_schema";
import { initialValues } from "./utils/form";
import { TextField, Grid, Button } from "@mui/material";

import { REGISTRATION } from "../../utilities/settings";
import Checkbox from "../Checkbox/Checkbox";

export default function RegistrationForm() {
  async function register(values) {
    try {
      const response = await fetch(REGISTRATION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("usuario registrado");
      } else {
        console.log("error en el registro");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (values, actions) => {
    register(values);
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: RegistrationFormSchema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid container direciont="column" spacing={2} maxWidth={"100%"}>
          <Grid item xs={10} md={6}>
            <TextField
              type="text"
              label="Nombre"
              name="name"
              variant="standard"
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
              variant="standard"
              fullWidth
              value={values.surname}
              onChange={handleChange}
              error={errors.surname}
              helperText={errors.surname}
            />
          </Grid>

          <Grid item xs={10} md={6}>
            <TextField
              type="password"
              label="Contraseña"
              name="password"
              variant="standard"
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
              variant="standard"
              fullWidth
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </Grid>
          <Grid item xs={10} md={12}>
            <TextField
              type="email"
              label="Email"
              name="email"
              variant="standard"
              fullWidth
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item sx={12} md={12}>
            <Checkbox />
          </Grid>

          <Grid item xs={10} md={12}>
            <Button
              disabled={isSubmitting}
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundImage: "linear-gradient(#0A0A0A ,#282829)",
                // backgroundColor: "primary.main",
                color: "var(--blanco)",
                p: "16px 24px",
              }}
            >
              Registrarme
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
