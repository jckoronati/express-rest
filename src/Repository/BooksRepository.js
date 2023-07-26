import { books } from "../Models/Books.js";

class BooksRepository {
    async findAll() {
        const result = await books.find();

        return result;
    }

    async create(body) {
        let book = new books(body);

        book.save();

        return true;
    }

    async findById(id) {
        const result = await books.findById(id);

        return result;
    }

    async update(id, body) {
        let result = false;

        result = await books.findOneAndUpdate(id, { $set: body });

        return result;
    }

    async delete(id) {
        let result = false;

        result = await books.findByIdAndDelete(id);

        return result;
    }
}

export { BooksRepository };
