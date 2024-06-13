const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/user/register", UserController.register);
  app.post("/api/user/login", UserController.login);
  app.post("/api/user/logout", UserController.logout);
  app.get(
    "/api/user/current-user",
    authenticate,
    UserController.getLoggedInUser
  );
  app.get("/api/users/showUsers", UserController.showUsers);


  // app.post('/api/user', userController.newUser);
  app.get('/api/user/:_id', UserController.showOneUser);
  app.put('/api/user/update/:_id/', UserController.updateUser);
  app.put('/api/user/userUpdate/:_id/', UserController.updateUser);
  // app.delete('/api/user/:_id', userController.deleteUser);
};
