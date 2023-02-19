import express, { Request, Response } from "express";
import * as BookService from "../service/book.service";
import { Book } from "../model/book.interface";

class BookController {
    public async get(req: Request, res: Response) {
        const books = await BookService.findAll();
        res.status(200).send(books);  
    }
    
    public async post(req: Request, res: Response){
        const book: Book = req.body;
        let newBook = await BookService.createBook(book);
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

