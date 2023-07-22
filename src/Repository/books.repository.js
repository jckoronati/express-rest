const books = [
    { id: 1, title: 'A arte da guerra', author: 'Sun Tzu' },
    { id: 2, title: 'Coraline', author: 'Neil Gaiman' },
];

/** @return {JSON} */
const getBooks = () => {
    return books;
};

/** @param {JSON} body */
const pushBooks = (body) => {
    books.push(body);

    if (books.length > 2)
        return true;

    return false;
};

/** @param {number} id */
const findById = (id) => {
    const result = books.findIndex(book => book.id == id);

    return result;
};

/** 
 * @param {number} id 
 * @param {JSON} body
 **/
const updateById = (id, body) => { 
    const book = findById(id);   

    console.log(books[book]);

    books[book].title = body.title;
    books[book].author = body.author;    
};

export { getBooks, pushBooks, findById, updateById };