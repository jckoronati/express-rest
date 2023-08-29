import { AuthorsRepository } from "../Repository/AuthorsRepository";

class AuthorsController {
    constructor() {
        this.repository = new AuthorsRepository();
    }

    /** @param {String} id */
    async getById(id) {
        const author = await this.repository.findById(id);

        if (author)
            return author;

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
    
    async delete(id) {
        const result = await this.repository.delete(id);

        return result;
    }
}

export { AuthorsController };
