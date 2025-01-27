const express = require("express");
const router = express.Router();
const similarController = require("../controllers/similar_controller");

router.get("/", similarController.getSimilar);

module.exports = router;