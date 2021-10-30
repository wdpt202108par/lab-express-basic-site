// require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// make everything inside of public/ available
app.use(express.static("public"));

// landing page route
app.get("/home", (req, res, next) => {
  res.sendFile(__dirname+"/views/home.html");
});

// about page route
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname+"/views/about.html");
})

// works page route
app.get("/works", (req, res, next) => {
  res.sendFile(__dirname+"/views/works.html")
})

// gallery page route
app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname+"/views/gallery.html")
})

// start server
app.listen(3000, () => console.log("My app is running on port 3000"))