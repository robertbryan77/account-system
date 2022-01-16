const { Router } = require("express");

const userController = require("./app/Controllers/userController");

const routes = new Router();

routes.post("/user", userController.index);

module.exports = routes;