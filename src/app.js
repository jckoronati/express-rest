import "dotenv/config.js"; // configure dotenv

import express from "express";
import { router } from "./Routes/index.js";
import { dbHelper } from "./Config/Database/Connect.js";

dbHelper.on("error", console.log.bind(console, "Connection refused: "));

dbHelper.once("open", () => {
    console.log("DB connected successfully ...");
});

const app = express();

app.use(express.json());

app.use(router);

export default app;
