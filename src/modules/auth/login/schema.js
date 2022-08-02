import * as yup from "yup";

export const SigninSchema = yup.object().shape({
  email: yup
    .string("")
    .required("emailRequired")
    .email("emailValid")
    .max(50, "emailMaxCharacter"),
  password: yup
    .string()
    .required("passwordRequired")
    .min(8, "passwordMinCharacter")
    .max(16, "passwordMaxCharacter"),
});
