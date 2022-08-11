import * as yup from 'yup';

export const ProfileSchema = yup.object().shape({
  email: yup.string('').required('email_is_required').email('email_invalid').max(50, 'email_must_50_char'),
  username: yup.string('').required('name_is_required'),
  phoneNumber: yup.string('').required('phone_is_required').matches('^[0-9]', 'phone_must_be_number'),
  birthdate: yup.string('').required('birthday_is_required'),
  address: yup.string('').required('address_is_required'),
  gender: yup.string('').required('gender_is_required'),
});
