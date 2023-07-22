import { books } from "../Models/Books.js";

class BooksRepository {
    async findAll() {
        const result = await books.find();

        return result;
    }

    async create(body) {
        let book = new books(body);

        book.save((error) => {
            throw new Error(`An error has occurred: ${error} \n Object passed: ${body}`);
        });

        return true;
    }
}

export { BooksRepository };
