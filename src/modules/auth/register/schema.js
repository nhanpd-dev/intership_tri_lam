import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().required('field-required').email('email-fail'),
    password: yup.string().required('field-required').min(8, 'password-min').max(16, 'password-max'),
    fullname: yup.string().required('field-required').min(6, 'fullName-min').max(30, 'fullName-max'),
    phonenumber: yup
        .string()
        .required('field-required')
        .min(11, 'phoneNumber-required')
        .max(11, 'phoneNumber-required'),
});
