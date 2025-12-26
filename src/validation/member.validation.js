import Yup from 'yup';

const createValidationMember = Yup.object({
  name: Yup.string().required('Name wajib di isi'),
  email: Yup.string().email('Email tidak sesuai').required('Email wajib di isi'),
});

export { createValidationMember };
