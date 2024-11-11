const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require('../controllers/authMiddleware');

router.post("/add", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/me", auth, userController.getUserByID);
router.post("/login", userController.loginUser);

module.exports = router;
