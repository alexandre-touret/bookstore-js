import express, {Request, Response} from "express";
import {Book} from "../model/book";
import BookService from "../service/book.service";
import bookService from "../service/book.service";

class BookController {


    public async get(req: Request, res: Response, next: any) {
        console.log("1");
        let bookService = new BookService();
        const books = await bookService.findAll();
        console.log("2");
        res.status(200).json(books);
    }

    public async post(req: Request, res: Response) {
        const book: Book = req.body;
        let bookService = new BookService();
        let newBook = await bookService.createBook(book);
        res.sendStatus(201);
    }
}

export default BookController;

// bookRouter.put("/", async (req: Request, res: Response) => {
//     const book: Book = req.body;
//     let newBook = await BookService.updateBook(book);
//     res.sendStatus(200);
// });

// bookRouter.delete("/", async (req: Request, res: Response) => {
//     const book: Book = req.body;
//     let newBook = await BookService.deleteBook(book);
//     res.sendStatus(200);
// });

