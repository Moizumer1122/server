// Password123 password 
// moiz umer username 
// todo-mern db name 
// to start the server use node index.js
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const TodoModal = require("./modals/Todo");
app.use(cors())
app.use(express.json())

let mongo_URL = "mongodb+srv://moizumer:Password123@cluster0.dhbnquq.mongodb.net/Todo?appName=Cluster0"
try {
    mongoose.connect(mongo_URL)
    console.log('mongodb connected')
} catch (error) {
    console.log("mongodb is not connected",error)
    
}

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

const PORT = 8000;
app.listen(PORT, () => {
    console.log('server is running on port :', PORT)
})