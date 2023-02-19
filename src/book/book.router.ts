import express, { Router } from 'express';
import BookController from './controller/book.controller';

const router = Router();
const bookController = new BookController();

router.get('/', bookController.get);
router.post('/', bookController.post);

export default router;