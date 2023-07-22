const books = [
    { id: 1, title: 'A arte da guerra', author: 'Sun Tzu' },
    { id: 2, title: 'Coraline', author: 'Neil Gaiman' },
];

const getBooks = () => {
    return books;
};

const pushBooks = (body) => {
    books.push(body);

    if (books.length > 2)
        return true;

    return false;    
};

export { getBooks, pushBooks };