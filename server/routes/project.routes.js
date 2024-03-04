const projectController = require("../controllers/project.controller");
module.exports = function (app) {
  app.get("/api", projectController.index);
};
