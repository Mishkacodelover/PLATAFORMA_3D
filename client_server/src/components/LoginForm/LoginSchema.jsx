import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Porfavor escriba un email válido")
    .required("Debes escribir un email"),
  password: yup.string().required("Debes ingresar una contraseña"),
});
