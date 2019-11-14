import * as yup from 'yup';

export default yup.object({
  login: yup.string().required('This is a required field'),
  email: yup
    .string()
    .email('Enter valid email')
    .required('This is a required field'),
  password: yup.string().required('This is a required field'),
});
