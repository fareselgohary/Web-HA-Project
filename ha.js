const { response } = require('express');
const express = require('express');
var app = express();
const path = require('path')
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/ha.html")
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})
app.get('/Feedback', (req, res) => {
    res.sendFile(__dirname + "/public/Feedback.html")
})
app.listen(3306, () => console.log("listening.."))