import { Book } from "../model/book";

class BookService {

public async findAll()  {
    return Book.findAll();
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
