const projectController = require("../controller/project.controller");
module.exports = function (app) {
  app.get("/api", projectController.index);
};
