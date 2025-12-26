import { createBookService } from '../service/book.service.js';

export const createBook = async (req, res, next) => {
  try {
    const { title, stock } = req.body;

    const book = await createBookService({ title, stock });

    return res.status(201).json({
      message: 'Buku berhasil ditambahkan',
      data: book,
    });
  } catch (err) {
    // Error dari validation akan di beri ziyad code 004
    next(err);
  }
};
