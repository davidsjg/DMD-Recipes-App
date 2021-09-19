const db = require("../models");

// Defining methods for the lakeController
module.exports = {
  // findAll: function (req, res) {
  //   db.Recipe.find(req.query)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  findRecipe: function (req, res) {
    db.Recipe.find({
      name: { $regex: new RegExp(req.query.q, "i") },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findBook: function (req, res) {
    db.Recipe.find({
      book: { $regex: new RegExp(req.query.q, "i") },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
