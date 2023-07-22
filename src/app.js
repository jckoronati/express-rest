import express from 'express';
import { getBooks, pushBooks } from './Repository/books.repository.js';

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

app.put('/books/:id', (req, res) => { 

 });

export default app;
