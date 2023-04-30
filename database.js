const {
    createPool
} = require('mysql2');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "hallbook",
    connectionLimit: 10
})

pool.query('show tables',(err,result,fields)=> {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})