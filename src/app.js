import express from 'express';
import { findById, getBooks, pushBooks, updateById } from './Repository/books.repository.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
    res.status(200).send('API node');
});

app.get('/books', (req, res) => {
    const books = getBooks();

    res.status(200).json(books);
});

app.post('/books', (req, res) => { 
    pushBooks(req.body);

    res.status(201).send('The book was successfully registered');
});

app.get('/books/:id', (req, res) => {
    const book = findById(req.params.id);

    // dumb but necessary
    const books = getBooks();

    res.status(200).json(books[book]);
});

app.put('/books/:id', (req, res) => { 
    updateById(req.params.id, req.body);

    const books = getBooks();

    res.status(200).json(books);
});

export default app;
