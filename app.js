const express = require('express');// librairie express dispo

const app = express(); // création serveur

app.use(express.static('public')); // route créé pour chaque fichier du dossier public

//route vers la page Home
app.get('/Home', function(req, res, next) {
    res.sendFile(__dirname+'/views/Home.html')
})

//route vers la page About
app.get('/About', function (req, res, next) {
    res.sendFile(__dirname+'/views/About.html')
})

//route vers la page Works
app.get('/Works', function (req, res, next) {
    res.sendFile(__dirname+'/views/Works.html')
})

//route vers la page Gallery
app.get('/Photo-Gallery', function (req, res, next) {
    res.sendFile(__dirname+'/views/Photo Gallery.html')
})

// attribution du port
app.listen(3500, function () {
  console.log('started')
});