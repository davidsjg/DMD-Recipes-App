const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Recipe.find(req.query)
      .then((dbModel) => req.res(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
