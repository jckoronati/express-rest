import mongoose from "mongoose";

console.log(process.env.MONGO_CONNECTION);

mongoose.connect(process.env.MONGO_CONNECTION);

let dbHelper = mongoose.connection;

export { dbHelper };