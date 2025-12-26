import express from 'express';
import { createBook } from '../controller/book.controller.js';
import { createBorrow } from '../controller/borrow.controller.js';
import { createMember } from '../controller/member.controller.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.json({ data: 'Hello World!' });
});

router.post('/api/books', createBook);

router.post('/api/members', createMember);

router.post('/api/borrow', createBorrow);

export { router };
