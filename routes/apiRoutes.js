var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({
      order: [['score', 'DESC']]
    }).then(function(dbExamples) {
      console.log('backend data ', dbExamples)
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      // res.json(dbExample);
      res.json('/');
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // PUT route for updating posts
  app.put("/api/examples", function(req, res) {
    db.Example.update(
      {score: req.body.score},
      {
        where: {
          username: req.body.username
        },
        returning: true 
      }).then(function(dbPost) {
        console.log(dbPost)
      // res.json(dbPost);
      // res.sendStatus(200);
    });
  });
};

/*
id, name, score, newScore
PUT Request -> /api/examples/:id
id -> req.params.id
app.put('/api/examples', function(req, res) {
  grab username
  db.example.update(req.body {name, newScore})

})
[row, [updatedRow]]
*/