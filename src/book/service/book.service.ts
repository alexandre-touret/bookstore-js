import {Book} from "../model/book";

class BookService {

    public async findAll() {
        return Book.findAll();
    }

    public async createBook(book: Book) {
        return Book.create(book)
    }

    public async updateBook(book: Book) {
        return Book.update(book, {
            where: {id: book.id}
        })
    }
    public async deleteBook(bookId: number) {
        return Book.destroy({where: {id: bookId}});
    }
}

export default BookService;
