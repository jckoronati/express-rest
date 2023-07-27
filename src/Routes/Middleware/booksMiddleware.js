import mongoose from "mongoose";

function isAValidId(req, res, next) {
    const isValid = mongoose.isObjectIdOrHexString(req.params.id);
    console.log(isValid);
    if (isValid)
        next();

    return res.status(404).send(`The id ${req.params.id} is invalid`);
}

export { isAValidId };