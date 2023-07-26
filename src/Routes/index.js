import { Router } from "express";
import { booksRouter as books } from "./Books/booksRoutes.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("API successfully online");
});

router.use("/books", books);

export { router };
