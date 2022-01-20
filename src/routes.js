const { Router } = require('express');
const { route } = require('express/lib/application');
const LoginController = require('./app/Controllers/LoginController');
// const { route } = require('./app');

const userController = require('./app/Controllers/userController');

const routes = new Router();

routes.post("/user", userController.store);
routes.get("/user", userController.show);

routes.get("/login", LoginController.index);

module.exports = routes;