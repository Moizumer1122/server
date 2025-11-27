// Password123 password 
// moiz umer username 
// todo-mern db name 
// to start the server use node index.js
const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())
app.post("/", (req, res) => {
    const { body } = req
    console.log('body', body);
    res.send("data received");
})
const PORT = 8000;
app.listen(PORT, () => {
    console.log('server is running on port :', PORT)
})