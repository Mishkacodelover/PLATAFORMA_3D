import { useFormik } from "formik";
import { LoginInvitedSchema } from "./LoginInvitedSchema";
import { initialValues } from "./utils/inicialValues";
import { TextField, Button, Grid, Typography } from "@mui/material";

import Link from "../Link/Link";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginFormInvitedView() {
  const { loginInvited } = useAuthContext();

  const onSubmit = (values, actions) => {
    loginInvited(values);
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginInvitedSchema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={2} direction="column" sx={{ width: "100%" }}>
          <Grid item xs={10} md={12}>
            <TextField
              type="email"
              label="Email"
              name="email"
              variant="standard"
              fullWidht
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={10} md={12}>
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
            />
          </Grid>

          <Grid item xs={10} md={12}>
            <Button
              fullWidht
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              sx={{
                backgroundImage: "linear-gradient(#0A0A0A ,#282829)",
                // backgroundColor: "primary.main",
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
      <Link to="/registration">
        <Typography>Crear cuenta</Typography>
      </Link>
    </>
  );
}
