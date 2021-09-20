const db = require("../models");

// Defining methods for the lakeController
module.exports = {
  // findAll: function (req, res) {
  //   db.Recipe.find(req.query)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findRecipe: function (req, res) {
  //   db.Recipe.find({
  //     name: { $regex: new RegExp(req.query.q, "i") },
  //   })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },

  // findBook: function (req, res) {
  //   db.Recipe.find({
  //     book: { $regex: new RegExp(req.query.q, "i") },
  //   })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },

  findIngredient: function (req, res) {
    console.log("inside query, req.query below");
    console.log(req.query);

    db.Recipe.find({
      ingredients: { $regex: new RegExp(req.query.q, "i") },
    })
      .then((dbModel) => res.json(dbModel))

      .catch((err) => res.status(422).json(err));
  },

  mainQuery: function (req, res) {
    console.log("inside double query, req.query below");
    console.log(req.query);

    if (req.query.r === "book") {
      db.Recipe.find({
        book: { $regex: new RegExp(req.query.q, "i") },
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else if (req.query.r === "recipe") {
      db.Recipe.find({
        name: { $regex: new RegExp(req.query.q, "i") },
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else if (req.query.r === "ingred") {
      db.Recipe.find({
        ingredients: { $regex: new RegExp(req.query.q, "i") },
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else if (req.query.r === "course") {
      db.Recipe.find({
        course: { $regex: new RegExp(req.query.q, "i") },
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    } else if (req.query.r === "allBooks") {
      db.Recipe.find({
        book: { $exists: true },
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  },

  // doubleQuery: function (req, res) {
  //   console.log("inside query, req below");
  //   console.log(req.query);
  //   db.Recipe.find({
  //     book: { $regex: new RegExp(req.query.q, "i") },
  //     recipe: { $regex: new RegExp(req.query.r, "i") },
  //   })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
