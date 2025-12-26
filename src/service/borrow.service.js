import { connectDB } from '../config/database.js';
import { ResponseError } from '../error/errorResponse.js';
import { createborrowValidation } from '../validation/borrow.validation.js';
import { validate } from '../validation/validation.js';

export const borrowBook = async (body) => {
  body = await validate(createborrowValidation, body);

  // Menggunakan transaction
  // Karena prosesnya mengubah lebih dari satu table dan untuk mencegah stok
  // berkurang tapi data pinjaman gagal disimpan
  return await connectDB.$transaction(async (tx) => {
    // Cek member
    const member = await tx.members.findUnique({
      where: { id: body.member_id },
    });

    if (!member) {
      throw new ResponseError(404, 'Member tidak ditemukan', 'ZYD-ERR-002');
    }

    // Cek stock buku dan update stock jika masih ada
    const updateResult = await tx.books.updateMany({
      where: {
        id: body.book_id,
        stock: { gt: 0 },
      },
      data: {
        stock: { decrement: 1 },
      },
    });

    if (updateResult.count === 0) {
      throw new ResponseError(400, 'Stok buku habis', 'ZYD-ERR-002');
    }

    // Simpan transaksi
    const borrow = await tx.borrow.create({
      data: {
        member_id: body.member_id,
        book_id: body.book_id,
      },
    });

    return borrow;
  });
};
