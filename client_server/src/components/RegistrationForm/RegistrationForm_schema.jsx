import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegistrationFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "EL nombre tiene que tener mínimo 3 letras")
    .required("Debes escribir un nombre"),
  surname: yup
    .string()
    .min(3, "EL apellido tiene que tener mínimo 3 letras")
    .required("Debes escribir un apellido"),

  email: yup
    .string()
    .email("Porfavor escriba un email válido")
    .required("Debes escribir un email"),
  password: yup
    .string()
    .required("Debes ingresar una contraseña")
    .min(5, "Debe tener al menos 5 caracteres")
    .matches(passwordRules, {
      message: " Incluya 1 letra mayúscula, 1 letra minúscula y 1 número.",
    }),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "La constraseña debe coincidir")
    .required("Escribe una contraseña"),
});
