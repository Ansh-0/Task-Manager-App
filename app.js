const express = require("express");
const app = express();
const connectDB = require('./db/connect');
const isFound = require('./middleware/isFound');
require('dotenv').config();

const tasks = require('./routes/tasks');

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(isFound);


const port = process.env.port || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`The server is running at port ${port}....`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
