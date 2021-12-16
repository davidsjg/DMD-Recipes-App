const db = require("../models");

// Defining methods for the lakeController
module.exports = {
  findTitles: function (req, res) {
    db.Recipe.find({}, { name: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findBooks: function (req, res) {
    db.Recipe.find({}, { book: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findIngredient: function (req, res) {
    db.Recipe.find({
      ingredients: { $regex: new RegExp(req.query.q, "i") },
    })
      .then((dbModel) => res.json(dbModel))

      .catch((err) => res.status(422).json(err));
  },

  mainQuery: function (req, res) {
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
    } else if (req.query.r === "allRecipes") {
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

  // findRecipe: function (req, res) {
  //   db.Recipe.find({
  //     name: { $regex: new RegExp(req.query.q, "i") },
  //   })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
