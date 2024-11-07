const { Difficulty } = require("../models");

const getAllDifficulties = async (req, res) => {
  try {
    const difficulties = await Difficulty.findAll();
    res.status(200).json(difficulties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllDifficulties };
