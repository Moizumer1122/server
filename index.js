// Password123 password 
// moiz umer username 
// todo-mern db name 
// to start the server use node index.js
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModal = require("./modals/Todo");
const app = express();
52-52
let mongo_URL = "mongodb+srv://moizumer:Password123@cluster0.dhbnquq.mongodb.net/Todo?appName=Cluster0"
mongoose.connect(mongo_URL)

app.use(cors())
app.use(express.json())

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

const PORT = 8000;
app.listen(PORT, () => {
    console.log('server is running on port :', PORT)
})