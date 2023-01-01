const { response, Router } = require('express');
const express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }));
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const { Loginpa, Feedpu } = require('./models/db.js');
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/test', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('connected')
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/ha.html")
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/public/sign.html")
})
app.post("/signup", (req, res) => {
    const signn = new Loginpa({ user: req.body.user, pass: req.body.pass })
    console.log(signn)
    signn.save().then(res.redirect("/login")).catch((err) => { res.send("try again") })


})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})
app.get('/Feedback', (req, res) => {
    res.sendFile(__dirname + "/public/Feedback.html")
})
app.get('/Done', (req, res) => {
    res.sendFile(__dirname + "/public/done.html")
})
app.get('/Locations', (req, res) => {
    res.sendFile(__dirname + "/public/location.html")
})
app.get('/Menu', (req, res) => {
    res.sendFile(__dirname + "/public/menu.html")
})
app.get('/Offers', (req, res) => {
    res.sendFile(__dirname + "/public/offers.html")
})
app.get('/Welcome', (req, res) => {
    res.sendFile(__dirname + "/public/logindone.html")
})
app.post("/Feedback", (req, res) => {
    const fff = new Feedpu(req.body)
    console.log(req.body)
    fff.save().then((result) => { res.redirect("/Done") }).catch((err) => { console.log(err) })


})


app.post('/login', (req, res) => {
    Loginpa.findOne({ user: req.body.user, pass: req.body.pass }, function (err, obj) {
        if (err) {
            console.log(err)
        }
        else {
            if (obj == null) {
                res.redirect("/login")
            }
            else {
                res.redirect("/home")
                var Token = jwt.sign({ _id: obj._id, user: req.body.user, pass: req.body.pass }, 'faresomar', { expiresIn: 20 })
                console.log(Token)
            }
        }
    })
})


app.listen(3306, () => console.log("listening.."))