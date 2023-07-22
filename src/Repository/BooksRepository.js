import { books } from "../Models/Books.js";

class BooksRepository {
    async findAll() {
        const result = await books.find();

        return result;
    }
}

export { BooksRepository };
