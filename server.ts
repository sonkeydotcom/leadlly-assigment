const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/auth', userRoutes);



app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
})


connectDB(app.listen(3000, () => {
    console.log("Server running on port 3000");
    }))