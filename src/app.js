import express from 'express';

const app = express();

const books = [
    { id: 1, title: 'A arte da guerra', author: 'Sun Tzu' },
    { id: 2, title: 'Coraline', author: 'Neil Gaiman' },
];

app.use(express.json());

app.get('/', (req, res) => { 
    res.status(200).send('API node');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => { 
    books.push(req.body);

    res.status(201).send('The book was successfully registered');
});

export default app;
