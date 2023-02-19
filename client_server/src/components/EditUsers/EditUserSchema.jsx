import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const EditUserSchema = yup.object().shape({
  email: yup.string().email("Porfavor escriba un email válido"),
  // .required("Debes escribir un email"),
  name: yup.string().required("Debes escribir un nombre"),

  surname: yup.string().required("Debes escribir un apellido al menos"),
  password: yup
    .string()
    // .required("Debes ingresar una contraseña")
    .min(5, "Debe tener al menos 5 caracteres")
    .matches(passwordRules, {
      message: " Incluya 1 letra mayúscula, 1 letra minúscula y 1 número.",
    }),
  role: yup.string(),

  // .required("Campo opligatorio"),
});
