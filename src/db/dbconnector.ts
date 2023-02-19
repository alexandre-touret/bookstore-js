import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    //connectionString: 'postgres://root:newPassword@localhost:port/dbname',
    connectionString: 'postgres://book:book@localhost:5432/books_database',
    idleTimeoutMillis: 30000
});

export default pool;