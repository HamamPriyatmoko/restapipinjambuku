# Ziyad Books API

Backend API untuk sistem peminjaman buku menggunakan:

- Node.js
- Express
- Prisma ORM
- MySQL

## Prerequisites

Pastikan sudah terinstall:

- Node.js >= 18
- npm >= 9
- MySQL 8+
- Prisma CLI

## Setup Aplikasi

1. ``bash npm install `
2. ``bash npx prisma init --datasource-provider mysql `
3. Tambahkan variable DATABASE_URL ini didalam env:

   DATABASE_URL="mysql://root:root@localhost:3306/ziyadbooks?connection_limit=5&socket_timeout=2"

4. Buat database ziyadbooks menggunakan mysql

## Jalankan Aplikasi

1. `bash npx prisma migrate dev/deploy `
2. `bash npx prisma generate `
3. `bash npm run dev `
