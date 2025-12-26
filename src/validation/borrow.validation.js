import Yup from 'yup';

const createborrowValidation = Yup.object({
  member_id: Yup.number('IdMember harus berupa angka').required('IdMember wajib diisi'),
  book_id: Yup.number('IdBook harus berupa angka').required('IdBook wajib diisi'),
});

export { createborrowValidation };
