import { Grid, TextField, MenuItem, Button } from "@mui/material";

import { useFormik } from "formik";
import { EditUserSchema } from "./EditUserSchema";
import { useAuthContext } from "../../contexts/AuthContext";
import { initialValues } from "./utils/editValues";
import { rolValues } from "./utils/rolValues";

export default function EditUserView() {
  const { authorization } = useAuthContext();

  async function updateUser(event, values) {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:8000/user/${authorization.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    try {
      if (response.ok) {
        console.log(response);
      } else {
        console.log("error al editar valor");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (values, actions) => {
    updateUser(values);
    actions.resetForm();
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: EditUserSchema,
      onSubmit,
    });

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
              {rolValues.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={8} md={12} sx={{ paddingTop: "8px" }}>
            <Button
              disabled={isSubmitting}
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundImage: "linear-gradient(#0A0A0A ,#282829)",

                color: "var(--blanco)",
                p: "16px 24px",
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
