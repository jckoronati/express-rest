import { Router } from 'express';
import { booksRouter as books } from './Books/booksRoutes.js'

const router = Router();

router.use('/books', books);

export { router };
