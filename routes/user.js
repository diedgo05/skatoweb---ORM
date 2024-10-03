const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/add", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserByID);

module.exports = router;
