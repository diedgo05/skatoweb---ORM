const { Guide } = require("../models");
const authenticateToken = require("../controllers/authMiddleware");
const config = require('../config/config.json')
const SECRET_KEY = config.development.SECRET_KEY

// Controlador para crear una guia (token)
const createGuide = async (req, res) => {
  try {
    const guide = await Guide.create(req.body);
    res.status(201).json(guide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todas las guias (token)
const getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.findAll();
    res.status(200).json(guides);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener una guía por ID (token)
const getGuideByID = async (req, res) => {
  try {
    const guide = await Guide.findAll({ where: { idUser: req.params.idUser } });;

    if (!guide || guide.length === 0) {
      return res.status(404).json({ message: "Guia no encontrado" });
    }

    res.status(200).json(guide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar una guía (token)
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

// Controlador para eliminar una guía (token)
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
  createGuide: [authenticateToken, createGuide],
  getAllGuides: [getAllGuides],
  getGuideByID: [authenticateToken, getGuideByID],
  updateGuide: [authenticateToken, updateGuide],
  deleteGuide: [authenticateToken, deleteGuide],
};
