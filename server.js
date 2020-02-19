
// *** Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const fs = require('fs');
const path = require("path");
// Requiring models for syncing
const db = require("./models");


//APP-CONFIG
let app = express();
let PORT = process.env.PORT || 8000; 

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

//Establishing view path location in MVC
let viewsPath = path.join(__dirname, "/views")
app.set('views', viewsPath);

// Allows app to implement handlebars to template data
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: viewsPath + '/layouts' })); 
app.set("view engine", "handlebars");


//Incorporate static directory
app.use(express.static(__dirname + "/public"));


//Links out to route handler
require("./routes/api_routes")(app);
// require("./routes/html_routes")(app);

//wrap app listeners w/ db sync to ensure db is ready
db.sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
  