import {
  Grid,
  TextField,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { useFormik } from "formik";
import { memberValues } from "./utils/memberValues";
import { initialValues } from "./utils/inviteMemberValues";
import { InviteMemberSchema } from "./inviteMemberSchema";

export default function InviteMember() {
  const onSubmit = (values, actions) => {
    actions.resetForm();
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: InviteMemberSchema,
    onSubmit,
  });

  return (
    <>
      <Grid container direction={"column"}>
        <form onSubmit={handleSubmit}>
          <Grid item xs={8} md={6}>
            <TextField
              filled
              type="text"
              label="Nombre"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={8} md={6}>
            <TextField
              filled
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
              filled
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
            <FormLabel id="roles">Permisos de usuario</FormLabel>
            <RadioGroup aria-labelledby="roles" defaultValue="1" name="roles">
              {memberValues.map((rol) => (
                <FormControlLabel
                  key={rol.value}
                  value={rol.value}
                  label={rol.label}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
