import BookService from "./book.service";
import pool from "../../db/dbconnector"
import {Sequelize} from "sequelize-typescript";
import {Book} from "../model/book";


const sequelize = new Sequelize({
    database: 'some_db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:',
    models: [Book], // or [Player, Team],
});


describe("BookService", () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    })
    test("should return empty array", async () => {
        const bookService = new BookService();
        const books = await bookService.findAll().then(value => {
            expect(value).toEqual([])
        });

    });
});
