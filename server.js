
// *** Dependencies
// =============================================================
const express = require("express");
const exphb = require("express-handlebars");
const mysql = require("mysql");
const fs = require('fs');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Requiring our models for syncing
var db = require("./models");

// Routes
// =============================================================
require("./routes/api_routes")(app);
require("./routes/html_routes")(app);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  