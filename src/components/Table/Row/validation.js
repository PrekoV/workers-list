import * as yup from 'yup';

export default yup.object({
  name: yup.string().required('This is a required field'),
  dateAdd: yup.string().required('This is a required field'),
  sex: yup.string().required('This is a required field'),
  position: yup.string().required('This is a required field'),
  rate: yup
    .number()
    .typeError('Should be a number')
    .positive('Must be greater than zero')
    .required('This is a required field'),
  contact: yup.string().required('This is a required field'),
});
