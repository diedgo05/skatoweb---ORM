const { Guide } = require("../models");

const createGuide = async (req, res) => {
  try {
    const guide = await Guide.create(req.body);
    res.status(201).json(guide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.findAll();
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGuideByID = async (req, res) => {
  try {
    const guide = await Guide.findByPk(req.params.id);

    if (!guide) {
      return res.status(404).json({ message: "Guia no encontrado" });
    }

    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Guide.update(req.body, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ message: "Guia no encontrado" });
    }

    const updatedGuides = await Guide.findByPk(id);
    res.status(200).json(updatedGuides);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Guide.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Guia no encontrado" });
    }

    res.status(204).json({ message: "Guia eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGuide,
  getAllGuides,
  getGuideByID,
  updateGuide,
  deleteGuide,
};
