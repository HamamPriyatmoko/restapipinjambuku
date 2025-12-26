import Yup from 'yup';

const createBookValidation = Yup.object({
  title: Yup.string().required('Title wajib di isi'),
  stock: Yup.number('Stock harus berupa angka')
    .positive('Stock tidak boleh negatif')
    .required('stock wajib diisi'),
});

export { createBookValidation };
