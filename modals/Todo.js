const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name: { type: String, required: true },

    hobby: { type: String, required: true },

    location: { type: String, required: true }

})
const UserModel = mongoose.model("todos", TodoSchema);
module.exports = TodoSchema;