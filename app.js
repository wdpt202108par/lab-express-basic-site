
// put a library
const express = require('express')
const path = require('path')
const app = express();

// if you want to put the pics
app.use (express.static('public'));

app.get('/home', function (req, res, next){
    res.sendFile(path.join(__dirname +'/index.html'));
   // res.send('<h1> Welocome to tabby world! </h1>');
})

app.get('/about', function (req,res,next){
    res.sendFile(path.join(__dirname +'/about.html'));
})

app.get('/works', function (req,res,next){
    res.sendFile(path.join(__dirname +'/works.html'));
})

app.get('/photo_gallery', function (req,res,next){
    res.send('<h1> Come and look at the tabby! </h1>');
})

app.listen(4000, function(){
    console.log('server is on. Yay!');
})
