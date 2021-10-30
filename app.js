const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express()

//Create a route for each public file
app.use(express.static('public'));

//Create first route to HOMEPAGE
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname+'/views/home.html');
  });

//Create second route to ABOUT page
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname+'/views/about.html');
  });

//Create third route to WORKS page
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname+'/views/works.html');
  });

//Create fourth route to GALLERY page
app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname+'/views/gallery.html');
  });

// Server Started -- Go to terminal and use nodemon app.js
app.listen(2000, () => console.log('My app listening on port 2000'));