import { BooksRepository } from "../Repository/BooksRepository.js";

class BooksController {
    async getAll() {
        const repository = new BooksRepository();

        const result = await repository.findAll();

        return result;
    }
}

export { BooksController };
