const mysql = require('mysql2')
const conn = mysql.createConnection({
    host: "cai.aast.edu",
    user: "web_15",
    password: "7460",
    database: "web_15",
})
conn.query(`select * from test`, function (err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})