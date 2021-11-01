const express = require('express')

const app = express()

app.use(express.static('public'));

app.get('/home', (req, res, next) => res.sendFile(__dirname + "\\views\\home.html"));

app.get('/about', (req, res, next) => res.sendFile(__dirname + "\\views\\about.html"));

app.get('/works', (req, res, next) => res.sendFile(__dirname + "\\views\\works.html"));



//routes

app.listen(4000, () => console.log('Lab Express'));
