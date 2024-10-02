const { Difficulty } = require("../models/FN");

const createDifficulty = async (req, res) => {
  try {
    const difficult = await Difficulty.create(req.body);
    res.status(201).json(difficult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllDifficulty = async (req, res) => {
  try {
    const difficulties = await Difficulty.findAll();
    res.status(200).json(difficulties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDifficulty,
  getAllDifficulty,
};
