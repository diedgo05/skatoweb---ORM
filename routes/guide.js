const express = require("express");
const router = express.Router();
const guideController = require("../controllers/guide");

router.post("/add", guideController.createGuide);
router.get("/", guideController.getAllGuides);
router.get("/:idUser", guideController.getGuideByID);
router.put("/up/:id", guideController.updateGuide);
router.delete("/delete/:id", guideController.deleteGuide);

module.exports = router;
