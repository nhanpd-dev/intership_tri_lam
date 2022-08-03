import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('enter_this_field').email('email_is_incorrect'),
  password: yup.string().required('enter_this_field').min(8, 'password_min').max(16, 'password_max'),
  fullname: yup.string().required('enter_this_field').min(6, 'fullName_min').max(30, 'fullName_max'),
  phonenumber: yup
    .string()
    .required('enter_this_field')
    .min(11, 'phoneNumber_required')
    .max(11, 'phoneNumber_required'),
});
