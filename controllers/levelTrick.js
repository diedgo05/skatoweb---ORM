const { LevelTrick } = require("../models");

const getAllLevelTricks = async (req, res) => {
  try {
    const levels = await LevelTrick.findAll();
    res.status(200).json(levels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllLevelTricks };
