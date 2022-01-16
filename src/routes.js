const { Router } = require("express");
const { route } = require("./app");

const userController = require("./app/Controllers/userController");

const routes = new Router();

routes.post("/user", userController.index);
routes.get("/user", userController.show);

module.exports = routes;