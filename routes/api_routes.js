
const db = require("../models");

module.exports = function (app) {


  // adding a new burger to database
  app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: 0
    }).then(function (dbBurgers) {
      res.json(dbBurgers);
    });
  });

  // moving burger to devoured list, if 'devour' button is cliked in a DOM
  app.put("/api/burger/:id", function (req, res) {
    db.Burgers.update({ devoured: 1 },
     
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurgers) {
        res.json(dbBurgers);
      });
    
  });



  // rendering home page
  app.get('/', function (req, res) {

    // Creating two arrays, one for devoured burgers, one for uneaten ones
    const devoured = [];
    const uneaten = [];

    // Using sequelize model to find all burgers
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

      // Sending both arrays to handlebars and lettting it populate the page
      res.render('index', { burgers: { devoured: devoured, uneaten: uneaten } })
    });
  });


}