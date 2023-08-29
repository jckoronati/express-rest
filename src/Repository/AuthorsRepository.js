import { Authors } from "../Models/Author.js";

class AuthorsRepository {
    async findAll() {
        const result = await Authors.find();

        return result;
    }

    async create(body) {
        let book = new Authors(body);

        await book.save();

        return true;
    }

    async findById(id) {
        const result = await Authors.findById(id);

        return result;
    }

    async update(id, body) {
        let result = false;

        result = await Authors.findOneAndUpdate(id, { $set: body });

        return result;
    }

    async delete(id) {
        let result = false;

        result = await Authors.findByIdAndDelete(id);

        return result;
    }
}

export { AuthorsRepository };
