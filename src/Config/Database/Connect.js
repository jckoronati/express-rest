import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_CONNECTION);

let dbHelper = mongoose.connection;

export { dbHelper };