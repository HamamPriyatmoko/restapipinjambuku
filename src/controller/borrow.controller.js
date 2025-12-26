import { borrowBook } from '../service/borrow.service.js';

export const createBorrow = async (req, res, next) => {
  try {
    const { member_id, book_id } = req.body;

    const result = await borrowBook({ member_id, book_id });

    return res.status(201).json({
      message: 'Peminjaman berhasil',
      data: result,
    });
  } catch (err) {
    // Error dari validation akan di beri ziyad code 004
    next(err);
  }
};
