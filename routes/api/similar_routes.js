const express = require("express");
const router = express.Router();
const similarController = require("../../controllers/api/similar_controller");

router.get("/", similarController.getSimilar);
router.get("/:id", similarController.getSimilarById);


module.exports = router; 