
const db = require("../models");

module.exports = function (app) {


  // adding a new burger to database
  app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function (dbBurgers) {
      res.json(dbBurgers);
    });
  });

  app.put("/api/burger/:id", function(req, res){

  });

  // rendering home page
  app.get('/', function (req, res) {
    // Use sequelize model to find all burgers
    // Create two arrays, one for devoured burgers, one for uneaten ones
    // Send both arrays to handlebars and let it populate the page
    // console.log("home page");

    
    const devoured = [];
    const uneaten = [];

    db.Burgers.findAll({}).then((resp) => {
      console.log(resp);
      for (let i = 0; i < resp.length; i++) {

        // When grabbing an object from a database, handlebars won't let you use the native 
        // object, you have to build a new object and populate it w/ the data handlebaars needs
        const burger = {
          id: resp[i].id,
          burger_name: resp[i].burger_name,
          devoured: resp[i].devoured
        }

        if (!burger.devoured) {
          uneaten.push(burger);
        } else {
          devoured.push(burger);
        }
      }

      res.render('index', { burgers: { devoured: devoured, uneaten: uneaten }})
    });
  });





}