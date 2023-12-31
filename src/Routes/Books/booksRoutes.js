import { Router } from "express";
import { BooksController } from "../../Controller/BooksController.js";
import { getAll } from "../Handle/booksHandle.js";
import { isAValidId } from "../Middleware/booksMiddleware.js";

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get("/", getAll);

booksRouter.post("/", async (req, res) => {
    try {
        const result = await booksController.create(req.body);

        if (result)
            res.status(201).send("Book was registered with success!");
        else
            res.status(400).send("Sorry, but the book was not registered.");
    } catch (error) {
        console.error(error);

        res.status(500).send("Something went wrong, try again later!");
    }
});

booksRouter.put("/:id", isAValidId, async (req, res) => { 
    try {
        const result = await booksController.update(req.params.id, req.body);   

        if (result)
            res.status(201).send("Book was updated with success!");
        else
            res.status(400).send("Sorry, but the book was not updated, try again later!");
    } catch (error) {
        console.error(error);

        res.status(500).send("Something went wrong, try again later!");
    }    
});

booksRouter.get("/:id", isAValidId, async (req, res) => {
    try {
        const result = await booksController.getById(req.params.id);

        if (result)
            res.status(200).json(result);
        else
            res.status(404).send("Sorry, book was not found.");            
    } catch (error) {
        console.error(error);

        res.status(500).send("Something went wrong, try again later!");
    }
});

booksRouter.delete("/:id", async (req, res) => {
    try {
        const result = await booksController.delete(req.params.id);

        if (result)
            res.status(201).send("Book was deleted successfully!");
        else
            res.status(404).send("Sorry, book was not found.");    
    } catch (error) {
        console.error(error);

        res.status(500).send("Something went wrong, try again later!");
    }
});

export { booksRouter };
