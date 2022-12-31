const mysql = require('mysql2')
const conn = mysql.createConnection({
    host: "cai.aast.edu",
    user: "web_15",
    password: "7460",
    database: "web_15",
})
con.connect(function (err) {
    if (err) throw err;
    console.log("connected")
});
conn.query(`SELECT * FROM `log` WHERE 1`, function (err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})