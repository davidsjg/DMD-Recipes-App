const router = require("express").Router();
const recipeController = require("../../controller/recipeController");

// Matches with "/api/recipes"
router.route("/").get(recipeController.mainQuery);
router.route("/titles").get(recipeController.findAll);
//   .post(destinationController.create)
//   .put(destinationController.update);

// router.route("/:name").get(lakeController.findByName);

router.route("/recipe/:recipe").get(recipeController.mainQuery);

// Matches with "/api/cities/:id"
// router
//   .route("/:id")
//   .get(destinationController.findById)
//   .put(destinationController.update)
//   .delete(destinationController.remove);

module.exports = router;
