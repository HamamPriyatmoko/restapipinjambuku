import { connectDB } from '../config/database.js';
import { ResponseError } from '../error/errorResponse.js';
import { createBookValidation } from '../validation/book.validation.js';
import { validate } from '../validation/validation.js';

export const createBookService = async (body) => {
  body = await validate(createBookValidation, body);

  // Cek apakah judul sudah ada
  const existing = await connectDB.books.findFirst({
    where: { title: body.title },
  });

  if (existing) {
    throw new ResponseError(409, 'Buku dengan judul ini sudah ada', 'ZYD-ERR-003');
  }

  const book = await connectDB.books.create({
    data: {
      title: body.title,
      stock: body.stock,
    },
  });

  return book;
};
