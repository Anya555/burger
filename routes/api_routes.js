
const db = require("../models");

module.exports = function (app) {
  // rendering home page
  app.get('/', function (req, res) {
    res.render('index');
  });

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

}

