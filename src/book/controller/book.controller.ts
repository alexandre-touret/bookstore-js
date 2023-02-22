import express, {Request, Response} from "express";
import {Book} from "../model/book";
import BookService from "../service/book.service";
import bookService from "../service/book.service";

class BookController {
    public async get(req: Request, res: Response, next: any) {
        let bookService = new BookService();
        const books = await bookService.findAll();
        res.status(200).json(books);
    }

    public async post(req: Request, res: Response) {
        const book: Book = req.body as Book;
        console.log("BOOK "+book);
        let bookService = new BookService();
        let newBook = await bookService.createBook(book);
        res.sendStatus(201);
    }

    public async put(req: Request, res: Response) {
        const book: Book = req.body;
        let bookService = new BookService();
        let newBook = await bookService.updateBook(book);
        res.sendStatus(200);
    }

    public async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id, 10);
        let bookService = new BookService();
        await bookService.deleteBook(id);
        res.sendStatus(204);
    }
}

export default BookController;


// bookRouter.delete("/", async (req: Request, res: Response) => {
//     const book: Book = req.body;
//     let newBook = await BookService.deleteBook(book);
//     res.sendStatus(200);
// });

