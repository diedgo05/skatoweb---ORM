const express = require("express");
const router = express.Router();
const { getAllDifficulties } = require("../controllers/difficulty");

router.get("/", getAllDifficulties);

module.exports = router;
