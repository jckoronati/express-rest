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

    books[book].title = body.title;
    books[book].author = body.author;    
};

/** @param {number} id */
const deleteById = (id) => {
    const lengthBeforeDeleted = books.length;

    const book = findById(id);

    if (books[book] !== undefined)
        books.splice(book, 1);

    const lengthAfterDeleted = books.length;

    if (lengthAfterDeleted !== lengthBeforeDeleted)
        return true;

    return false;
};

export { getBooks, pushBooks, findById, updateById, deleteById };