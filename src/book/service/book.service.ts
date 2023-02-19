import { Book } from "../model/book.interface";
import pool from "../../db/dbconnector"


class BookService {

public async findAll() {


    
    const client = await pool.connect();
    const sqlQuery = "select * from book";
    const { rows } =  await client.query(sqlQuery);
    const books = rows;
    client.release()
    return books;
}

public async createBook(book: Book) {
    //

}

public async updateBook() {
    //

}


public async deleteBook() {
    return true;

}

}



export default BookService;
