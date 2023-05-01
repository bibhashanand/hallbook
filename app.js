const express = require("express");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path: './.env'})

const app = express();

const db = mysql2.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
//console.log(__dirname);


//DIR - /Applications/XAMPP/xamppfiles/htdocs/weapp
app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error){
        console.log(error)
    }
    else {
        console.log("MySQL Connected ......")
    }
})

//define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(5001, () => {
    console.log("Server started on port 5001");
})