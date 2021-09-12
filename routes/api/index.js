const router = require("express").Router();
const lakeRoutes = require("./lakes");

// Destination routes
router.use("/lakes", lakeRoutes);

module.exports = router;
