import { BooksRepository } from "../Repository/BooksRepository.js";

class BooksController {
    constructor() {
        this.repository = new BooksRepository();
    }

    async getAll() {
        const result = await this.repository.findAll();

        return result;
    }

    async create(body) {
        const result = await this.repository.create(body);

        return result;
    }
}

export { BooksController };
