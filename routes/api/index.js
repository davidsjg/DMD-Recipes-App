const router = require("express").Router();
const appRoutes = require("./recipeRoutes");

// Destination routes
router.use("/recipes", appRoutes);

module.exports = router;
