import * as yup from "yup";

export const InviteMemberSchema = yup.object().shape({
  email: yup
    .string()
    .email("Porfavor escriba un email válido")
    .required("Debes escribir un email"),
  name: yup.string().required("Debes escribir un nombre"),

  surname: yup.string().required("Debes escribir un apellido al menos"),
});
