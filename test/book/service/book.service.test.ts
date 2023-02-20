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
        sequelize.query("PRAGMA ignore_check_constraints = true")
            .then(() => {
                return sequelize.query("delete from books")
            })
            .then(() => {
                return sequelize.query(sql_string)
            }).catch(reason => {
            throw new Error(reason)
        })
    })

    test("should return empty array", async () => {
        const bookService = new BookService();
        const books = await bookService.findAll().then(value => {
            expect(value).toBeDefined()
        });
    });
})

