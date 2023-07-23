import { books } from "../Models/Books.js";

class BooksRepository {
    async findAll() {
        const result = await books.find();

        return result;
    }

    async create(body) {
        let book = new books(body);

        book.save((error) => {
            throw new Error(`An error has occurred: \n ${error} \n Object passed: ${body}`);
        });

        return true;
    }

    async findById(id) {
        const result = await books.findById(id);

        return result;
    }

    async update(id, body) {
        result = false;

        result = await books.findByIdAndUpdate(id, { $set: body }, (error) => {
            if (error)
                throw new Error(`An error has ocurred: \n ${error} \n ID: 
                    ${id} \n Object passed: ${body} \n`);
            else
                return true;
        });

        return result;
    }

    async delete(id) {
        const result = false;

        result = await books.findByIdAndDelete(id, (error) => {
            if (error)
                throw new Error(`An error has ocurred: \n ${error} \n ID: ${id} \n`);
            else
                return true;
        });

        return result;
    }
}

export { BooksRepository };
