const router = require("express").Router();
const recipeController = require("../../controller/recipeController");

// Matches with "/api/lakes"
// router.route("/").get(lakeController.findAll);
//   .post(destinationController.create)
//   .put(destinationController.update);

// router.route("/:name").get(lakeController.findByName);

// Matches with "/api/cities/:id"
// router
//   .route("/:id")
//   .get(destinationController.findById)
//   .put(destinationController.update)
//   .delete(destinationController.remove);

module.exports = router;
