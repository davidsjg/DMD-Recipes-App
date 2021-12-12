const router = require("express").Router();
const recipeController = require("../../controller/recipeController");

// Matches with "/api/recipes"
router.route("/").get(recipeController.mainQuery);
// Matches with "/api/recipes/titles"
router.route("/titles").get(recipeController.findTitles);
// Matches with "/api/recipes/books"
router.route("/books").get(recipeController.findBooks);

// router.route("/recipe/:recipe").get(recipeController.mainQuery);

module.exports = router;
