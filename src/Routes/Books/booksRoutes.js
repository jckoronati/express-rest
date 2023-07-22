import { Router } from 'express';
import { BooksController } from '../../Controller/BooksController.js';

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get('/', await booksController.getAll());

export { booksRouter };
