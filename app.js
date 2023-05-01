const express = require("express");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({path: './.env'})

const app = express();

const db = mysql2.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

db.connect( (error) => {
    if(error){
        console.log(error)
    }
    else {
        console.log("MySQL Connected ......")
    }
})

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(5001, () => {
    console.log("Server started on port 5001");
})