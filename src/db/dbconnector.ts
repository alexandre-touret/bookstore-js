import { Sequelize } from 'sequelize-typescript';
import {Book} from "../book/model/book";

const sequelize = new Sequelize({
    database: 'books_database',
    dialect: 'postgres',
    username: 'book',
    password: 'book',
    models: [Book], // or [Player, Team],
});
export  default sequelize;
