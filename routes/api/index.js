const router = require("express").Router();
const appRoutes = require("./recipeRoutes");

// Destination routes
router.use("/", appRoutes);

module.exports = router;
