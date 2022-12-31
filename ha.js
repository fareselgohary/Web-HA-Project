const { response } = require('express');
const express = require('express');
var app = express();
const path = require('path')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
const Loginp = require('./models/db.js');
mongoose.connect('mongodb://127.0.0.1:27017/test', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('connected')
    }
});
const schema = mongoose.schema;
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/ha.html")
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/public/sign.html")
})
app.get('/Feedback', (req, res) => {
    res.sendFile(__dirname + "/public/Feedback.html")
})
app.get('/Done', (req, res) => {
    res.sendFile(__dirname + "/public/done.html")
})
app.post("/signup", (req, res) => {
    const signn = new Loginp(req.body)
    console.log(req.body)
    signn.save().then((result) => { res.redirect("/login") }).catch((err) => { console.log(err) })


})


app.listen(3306, () => console.log("listening.."))