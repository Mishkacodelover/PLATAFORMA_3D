import { useFormik } from "formik";
import { RegistrationFormSchema } from "./RegistrationForm_schema";
import { initialValues } from "./utils/form";
import { TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { REGISTRATION } from "../../utilities/settings";
import Checkbox from "../Checkbox/Checkbox";

export default function RegistrationForm() {
  const navigate = useNavigate();

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
        navigate("/login");
        console.log(response);
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
        <Grid container spacing={2} maxWidth={"100%"}>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
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

          <Grid item xs={12} md={6}>
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

          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={12}>
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
          <Grid item sx={9} md={12}>
            <Checkbox text="Acepto las políticas de privacidad" />
          </Grid>

          <Grid item xs={12} md={12}>
            <Button
              disabled={isSubmitting}
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "primary.dark",
                color: "common.white",
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
