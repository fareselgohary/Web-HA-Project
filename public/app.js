var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "web_15",
    password: "7460"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected")
});