import { Router } from 'express';
import { BooksController } from '../../Controller/BooksController.js';

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get('/', async (req, res) => {
    const result = await booksController.getAll();

    res.status(200).json(result);
});

export { booksRouter };
