import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('enter_this_field').email('email_is_incorrect'),
  password: yup.string().required('enter_this_field').min(8, 'password_min_lenght').max(16, 'password_max_lenght'),
  fullName: yup.string().required('enter_this_field').min(6, 'fullName_min_lenght').max(30, 'fullName_max_lenght'),
  phoneNumber: yup
    .string()
    .required('enter_this_field')
    .min(11, 'phoneNumber_required')
    .max(11, 'phoneNumber_required'),
});
