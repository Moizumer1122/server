// Password123 password 
// moiz umer username 
// todo-mern db name 
// to start the server use node index.js
require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const TodoModal = require("./modals/Todo");
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));
app.use(express.json())
let mongo_URL = process.env.DB_URL
try {
    mongoose.connect(mongo_URL)
    console.log('mongodb connected')
} catch (error) {
    console.log("mongodb is not connected", error)

}
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

// AGR KOI CLIENT DATA SEND KR RHA HO TO KASA RES OR REQ HANDLE KRNA HA
app.post("/createTodo", async (req, res) => {
    const todo = req.body;
    const newTodo = new TodoModal(todo);
    try {
        await newTodo.save()
        res.json(todo)
    } catch (error) {
        res.json(error)
    }
})
// AGR KOI CLIENT DATA READ KRNA CHAHTA HO TO KASA RES OR REQ HANDLE KRNA HA
app.get("/readTodos", async (req, res) => {
    try {
        const todos = await TodoModal.find({});
        res.send(todos)
    } catch (error) {
        console.log(error)
    }

})
// AGR KOI CLIENT DATA UPDATE KRNA CHAHTA HO TO KASA RES OR REQ HANDLE KRNA HA
app.post("/updateTodo", async (req, res) => {
    try {
        const todo = req.body
        let data = { ...todo }
        delete data._id
        await TodoModal.findByIdAndUpdate(todo._id, data)
        res.send("todo updated")
    } catch (error) {
        res.send("something went wrong")
    }

})
// AGR KOI CLIENT DATA DELETE KRNA CHAHTA HO TO KASA RES OR REQ HANDLE KRNA HA
app.delete("/deleteTodo/:_id", async (req, res) => {
    try {
        const { _id } = req.params
        console.log('_id', _id)
        await TodoModal.findByIdAndDelete(_id)
        res.send("todo deleted")
    } catch (error) {
        console.log(error)
    }
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log('server is running on port :', PORT)
})
module.exports = app;