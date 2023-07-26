import { BooksController } from "../../Controller/BooksController.js";

const booksController = new BooksController();

const getAll = async (req, res) => {
    const books = await booksController.getAll();

    return res.status(200).json(books);
};

export { getAll };
