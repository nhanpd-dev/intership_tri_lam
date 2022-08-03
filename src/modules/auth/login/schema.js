import * as yup from "yup";

export const SigninSchema = yup.object().shape({
  email: yup
    .string("")
    .required("email_is_required")
    .email("email_invalid")
    .max(50, "email_must_50_char"),
  password: yup
    .string()
    .required("password_is_required")
    .min(8, "password_must_least_8_char")
    .max(16, "password_must_16_char"),
});
