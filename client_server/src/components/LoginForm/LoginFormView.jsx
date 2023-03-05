import { useFormik } from "formik";
import { LoginSchema } from "./LoginSchema";
import { initialValues } from "./utils/inicialValues";
import { TextField, Grid, Typography, Button, Box } from "@mui/material";
import Checkbox from "../Checkbox/Checkbox";

import Link from "../Link/Link";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginFormView() {
  const { login } = useAuthContext();

  const onSubmit = (values, actions) => {
    login(values);
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid item xs={12} md={12}>
          <TextField
            fullWidht
            type="email"
            label="Email"
            name="email"
            variant="standard"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email}
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            fullWidht
            type="password"
            label="Contraseña"
            name="password"
            variant="standard"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            helperText={errors.password}
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={10} md={12}>
          <Button
            fullWidth
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            sx={{
              marginTop: "24px",
              p: "8px 24px",
              backgroundColor: "primary.dark",
            }}
          >
            Iniciar sesión
          </Button>
        </Grid>
        <Grid
          item
          xs={10}
          md={12}
          container
          direction="row"
          alignItems={"center"}
        >
          <Checkbox text="Recuérdame" />
          <Link to="">
            <Typography>¿Has olvidado tu contraseña?</Typography>
          </Link>
        </Grid>
      </form>

      <Grid container direction="row" spacing={4} sx={{ paddingTop: "44px" }}>
        <Grid item>
          <Typography variant="h4" color="secondary.dark">
            ¿No estás registrado aún?
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/registration">
            <Typography variant="h4">Crear cuenta</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
