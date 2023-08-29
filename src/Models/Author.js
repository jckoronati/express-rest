import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    language: { type: String, required: true },
});

const Authors = mongoose.model("authors", authorSchema);

export { Authors };