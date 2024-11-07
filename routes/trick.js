const express = require("express");
const router = express.Router();
const trickController = require("../controllers/trick");

router.post("/add", trickController.createTrick);
router.get("/", trickController.getAllTricks);
router.get("/:idUser", trickController.getTrickByID);
router.put("/up/:id", trickController.updateTrick);
router.delete("/delete/:id", trickController.deleteTrick);

module.exports = router;
