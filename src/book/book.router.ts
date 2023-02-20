import express, { Router } from 'express';
import BookController from './controller/book.controller';
import BookService from "./service/book.service";
import {Book} from "./model/book";

const router = Router();

let bookService = new BookService();
const bookController = new BookController();

router.get('/', bookController.get);
router.post('/', bookController.post);

export default router;
