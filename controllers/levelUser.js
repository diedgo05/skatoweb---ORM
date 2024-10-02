const { LevelUser } = require("../models/FN");

const createlevelU = async (req, res) => {
  try {
    const lu = await LevelUser.create(req.body);
    res.status(201).json(lu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllLu = async (req, res) => {
  try {
    const lus = await LevelUser.findAll();
    res.status(200).json(lus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createlevelU,
  getAllLu,
};
