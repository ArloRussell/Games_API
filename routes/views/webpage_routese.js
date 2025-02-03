const express = require("express");
const router = express.Router();
const homeController = require("../../controllers/views/home_controller");
const gameController = require("../../controllers/views/game_page_controller");

router.get("/", homeController.renderHomePage);
router.get("/game/:id", gameController.renderGamePage);

module.exports = router;