import BookService from "./book.service";
import pool from "../../db/dbconnector"

jest.mock('pg', () => {
    const mPool = {
      connect: function () {
        return { query: jest.fn() };
      },
      query: jest.fn(),
      end: jest.fn(),
      on: jest.fn(),
    };
    return { Pool: jest.fn(() => mPool) };
  });


describe("BookService", () => {
    test("should return empty array", async () => {
          describe("findAll", () => {
        const bookService = new BookService();
        const books =  bookService.findAll();
        expect(books).toEqual([]);
      });
    });
  });