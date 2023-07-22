import mongoose from "mongoose";

console.log(process.env.DATABASE_CONNECTION);

mongoose.connect(process.env.DATABASE_CONNECTION);

let dbHelper = mongoose.connection;

export { dbHelper };