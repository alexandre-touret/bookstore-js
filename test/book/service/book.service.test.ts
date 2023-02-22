import BookService from "../../../src/book/service/book.service";
import pool from "../../../src/db/dbconnector"
import {Sequelize} from "sequelize-typescript";
import {Book} from "../../../src/book/model/book";
import * as fs from "fs";

var sql_string = fs.readFileSync('./test/import.sql', 'utf8');
const sequelize = new Sequelize({
    database: 'some_db',
    dialect: 'sqlite',
    dialectOptions: {
        multipleStatements: true
    },
    username: 'root',
    password: '',
    storage: ':memory:',
    models: [Book], // or [Player, Team],
});


describe("BookService", () => {
    beforeAll(async () => {
        await sequelize.sync({force: true})
        // Setup the DB to import data in bulk.
        sequelize.query("select * from books")
            .then(() => {
                let book = new Book();
                book.id = 1;
                book.author = "author"
                book.description = "description"
                book.isbn_13 = "1234567891234"
                book.price = 1
                book.rank = 1
                book.medium_image_url = ""
                book.small_image_url = ""
                book.nb_of_pages = 1
                book.year_of_publication = 2022

                book.save();
                console.log("apres save")
            })
            //     .then(() => {
            //     sequelize.query("INSERT INTO `Books` (`id`,`author`,`isbn_13`,`rank`,`small_image_url`,`medium_image_url`,`price`,`nb_of_pages`,`year_of_publication`,`description`,`createdAt`,`updatedAt`) VALUES (2,'author','1234567891234',1,'','',2,2,2022,'description',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);")
            // })
            .catch(reason => {
                throw new Error(reason)
            })
    })

    test("should return empty array", async () => {
        const bookService = new BookService();
        const books = await bookService.findAll().then(value => {
            expect(value.length).toEqual(1)
        });
    });

    test("should create a book successfully", async () => {
        const bookService = new BookService();
        let book = new Book();
        book.id = 2;
        book.author = "author"
        book.description = "description"
        book.isbn_13 = "1234567891234"
        book.price = 1
        book.rank = 1
        book.medium_image_url = ""
        book.small_image_url = ""
        book.nb_of_pages = 1
        book.year_of_publication = 2022
        bookService.createBook(book).then(newBook => expect(newBook.id).toEqual(2));
    })

    test("should update a book successfully", async () => {
        const bookService = new BookService();
        let book = new Book();
        book.id = 2;
        book.author = "author"
        book.description = "description"
        book.isbn_13 = "1234567891234"
        book.price = 1
        book.rank = 1
        book.medium_image_url = ""
        book.small_image_url = ""
        book.nb_of_pages = 1
        book.year_of_publication = 2022
        bookService.createBook(book).then(newBook => {
            newBook.author = "newAuthor";
            return newBook.save();

        }).then(updatedBook => {
            expect(updatedBook.author).toEqual("newAuthor");
        });
    })
    test("should delete a book successfully", async () => {
        const bookService = new BookService();
        let book = new Book();
        book.id = 2;
        book.author = "author"
        book.description = "description"
        book.isbn_13 = "1234567891234"
        book.price = 1
        book.rank = 1
        book.medium_image_url = ""
        book.small_image_url = ""
        book.nb_of_pages = 1
        book.year_of_publication = 2022
        bookService.createBook(book).then(newBook => {
            return bookService.deleteBook(newBook.id);

        }).catch(reason => {
            throw new Error(reason);
        })

        ;
    })
})
