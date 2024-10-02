const { LevelTrick } = require("../models/FN");

const createLt = async (req, res) => {
  try {
    const lt = await LevelTrick.create(req.body);
    res.status(201).json(lt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllLt = async (req, res) => {
  try {
    const lts = await LevelTrick.findAll();
    res.status(200).json(lts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLt,
  getAllLt,
};
