const express = require("express");
const router = express.Router();

const { getAllLevelTricks } = require("../controllers/levelTrick");

router.get("/", getAllLevelTricks);

module.exports = router;
