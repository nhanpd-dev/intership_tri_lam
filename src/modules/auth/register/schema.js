import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('enter_this_field').email('email_is_incorrect'),
  password: yup.string().required('enter_this_field').min(8, 'password_min_length').max(16, 'password_max_length'),
  confirm_password: yup
    .string()
    .required('enter_this_field')
    .oneOf([yup.ref('password'), null], 'password_not_match'),
  full_name: yup.string().required('enter_this_field').min(6, 'full_name_min_length').max(30, 'full_name_max_length'),
  phone_number: yup
    .string()
    .required('enter_this_field')
    .min(11, 'phone_number_required')
    .max(11, 'phone_number_required'),
});
