const mysql2 = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const db = mysql2.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


exports.signup = (req, res) => {
    console.log(req.body);
    
    // const name = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;
    // const confirmpassword = req.body.confirmpassword;

    const { username, email, password, confirmpassword } = req.body;
    
    db.query('SELECT email FROM users WHERE email = ?',[email], async (error, results) => {
        if(error){
            console.log(error);
        }
        if(results.length >0){
            return res.render('signup',{
                message: 'Email already registered'
            })
        }
        else if( password !== confirmpassword){
            return res.render('signup',{
                message: 'Password do not match!'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);


        db.query('INSERT INTO users SET ?',{username: username, email: email, password: hashedPassword}, (error, results) => {
            if(error) {
                console.log(error);
            }
            else{
                console.log(error);
                return res.render('signup', {
                    message: "Successfully registered :)"
                });
            }
        })
    });




}

exports.login = (req, res) => {
    console.log(req.body);

    const { username, password} = req.body;
    
    db.query('SELECT username FROM users WHERE username = ?',[username], async (error, results) => {
        if(error){
            console.log(error);
        }
        if(results.length >0){
            let hashedPassword = await bcrypt.hash(password, 8);
            console.log(password);
            console.log(hashedPassword);
            db.query('SELECT password FROM users WHERE password = ?',[hashedPassword], (error, results) => {
                if(error){
                    console.log(error);
                }
                else{

                return res.render('login', {
                    message: "Logged In now go to hall page for booking"
                });
                    }
            })
        }

    });




}


exports.booking = (req, res) => {
    console.log(req.body);
    

    const { eventName, email, phone, bookingDate, eventTimeStart, eventTimeEnd, hall, message } = req.body;
    
    db.query('INSERT INTO book SET ?',{eventName: eventName, email: email, phone: phone, bookingDate: bookingDate, eventTimeStart: eventTimeStart, eventTimeEnd: eventTimeEnd, hall: hall, message: message}, (error, results) => {
            if(error) {
                console.log(error);
            }
            else{
                console.log(error);
                return res.render('booking', {
                    message: "Successfully booked :)"
                });
            }
        })
}