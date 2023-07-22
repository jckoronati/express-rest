import mongoose from "mongoose";

const DATABASE_PATH = "";

mongoose.connect(DATABASE_PATH);

let dbHelper = mongoose.connection;

export { dbHelper };