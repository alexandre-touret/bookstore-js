import BookService from "../../../src/book/service/book.service";
import {Sequelize} from "sequelize-typescript";
import {Book} from "../../../src/book/model/book";
import request from "supertest";
import * as fs from "fs";
import server from "../../../src/server";

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

let app = new server().app;
describe("Book Controller", () => {
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
            })
            .catch(reason => {
                throw new Error(reason)
            })
    })

    test("[GET /books] --> [200:1 element]", async () => {
        const response = await request(app).get("/books");
        expect(response.statusCode).toEqual(200);
    });

    test("[POST /books] --> [200]", async () => {
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
        let data = JSON.stringify(book);
        const response = await request(app).post("/books").send(data);
        expect(response.statusCode).toEqual(201);
    })

    test("[PUT /books/1] --> [200]", async () => {
        let book = new Book();
        book.id = 2;
        book.author = "newAuthor"
        book.description = "description"
        book.isbn_13 = "1234567891234"
        book.price = 1
        book.rank = 1
        book.medium_image_url = ""
        book.small_image_url = ""
        book.nb_of_pages = 1
        book.year_of_publication = 2022
        const response = await request(app).put("/books/1").send(JSON.stringify(book));
        expect(response.statusCode).toEqual(200);

    })
    test("[DELETE /books/1] --> [200]", async () => {
        const response = await request(app).put("/books/1").send();
        expect(response.statusCode).toEqual(200);
    })
})
