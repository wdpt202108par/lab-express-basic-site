//Création serveur
const express = require('express');
const app = express();


app.use(express.static('public'));

//Création des 'routes' vers les pages
// Page Home
app.get('/home', function(reg, res, next) {
  res.sendFile(__dirname + '/views/home.html')
})

//Page About
app.get('/about', function(reg, res, next) {
  res.sendFile(__dirname + '/views/about.html')
})

//Page Works
app.get('/works', function(reg, res, next) {
  res.sendFile(__dirname + '/views/works.html')
})

//Photo Gallery
app.get('/photo-gallery', function(reg, res, next) {
  res.sendFile(__dirname + '/views/photo-gallery.html')
})

app.listen(4000, function() {
  console.log('Serveur : On')
})

