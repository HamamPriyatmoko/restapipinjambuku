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

1. install dependesi

```bash
    npm install
    npx prisma init --datasource-provider mysql
```

2. Tambahkan variable DATABASE_URL ini didalam env:

DATABASE_URL="mysql://root:root@localhost:3306/ziyadbooks?connection_limit=5&socket_timeout=2"

4. Buat database ziyadbooks menggunakan mysql

## Jalankan Aplikasi

1. Migration

- Untuk Development

```bash
   npx prisma migrate dev
```

- Untuk Production

```bash
    npx prisma migrate deploy
```

2. Membuat Prisma Client

```bash
    npx prisma generate
```

3. Menjalankan Server API

```bash
    npm run dev
```

4. Server akan berjalan di http://localhost:3000
