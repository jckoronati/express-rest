import { BooksRepository } from "../Repository/BooksRepository.js";

class BooksController {
    constructor() {
        this.repository = new BooksRepository();
    }

    async getAll() {
        const result = await repository.findAll();

        return result;
    }
}

export { BooksController };
