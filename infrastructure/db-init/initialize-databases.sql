-- CREATE ROLE bookstore WITH LOGIN PASSWORD 'bookstore';

-- CREATE ROLE book WITH LOGIN PASSWORD 'book' NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;
-- CREATE DATABASE books_database;

-- GRANT ALL PRIVILEGES ON DATABASE books_database TO book ;
-- GRANT ALL PRIVILEGES ON DATABASE books_database TO bookstore;
CREATE TABLE book
(
    id integer NOT NULL,
    title text  NOT NULL,
    author text NOT NULL,
    CONSTRAINT book_pkey PRIMARY KEY (id)
)