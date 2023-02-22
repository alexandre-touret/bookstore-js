import express, {Application, Router} from 'express';
import bodyParser from 'body-parser';
import bookRouter from './book/book.router';
import pool from './db/dbconnector';

class Server {
    private _app;

    constructor() {
        this._app = express();
        this.config();
        this.routerConfig();
    }

    private config() {
        this._app.use(bodyParser.urlencoded({extended: true}));
        this._app.use(bodyParser.json({limit: '1mb'})); // 100kb default
    }

    private routerConfig() {
        this._app.use('/books', bookRouter);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this._app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }


    public get app() {
        return this._app;
    }
}

export default Server;
