import { Book } from "../model/book.interface";
import pool from "../../db/dbconnector"
let books = {
    1: {
        id: 1,
        title: "title",
        author: "author"
    }
}


export const findAll= async():Promise<Book[]>  => {
    const client = await pool.connect();
    const sqlQuery = "select * from book";
    const { rows } = await client.query(sqlQuery);
    const books = rows;
    client.release()
    return books;
} 

export const createBook= async(book: Book): Promise<Book> => books[1];

export const updateBook = async(book: Book): Promise<Book> => books[1];

export const deleteBook = async(book: Book): Promise<boolean> => true;