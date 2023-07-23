import { BooksRepository } from "../Repository/BooksRepository.js";

class BooksController {
    constructor() {
        this.repository = new BooksRepository();
    }

    /** @param {String} id */
    async getById(id) {
        const book = await this.repository.findById(id);

        if (book)
            return book;

        return null;
    }

    async getAll() {
        const result = await this.repository.findAll();

        return result;
    }

    async create(body) {
        const result = await this.repository.create(body);

        return result;
    }

    /** 
     * @param {String} id 
     * @param {JSON} body
     **/
    async update(id, body) {                
        const result = await this.repository.update(id, body);

        return result;
    }
}

export { BooksController };
