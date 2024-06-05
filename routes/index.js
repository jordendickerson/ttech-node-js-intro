const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.appGet);

routes.get("/ttech", myController.awesomeMessage);

module.exports = routes;
