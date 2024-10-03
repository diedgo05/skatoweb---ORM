const { Trick } = require("../models");

// Controlador para crear un usuario
const createTrick = async (req, res) => {
  try {
    const trick = await Trick.create(req.body);
    res.status(201).json(trick);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los usuarios
const getAllTricks = async (req, res) => {
  try {
    const tricks = await Trick.findAll();
    res.status(200).json(tricks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un usuario por ID
const getTrickByID = async (req, res) => {
  try {
    const trick = await Trick.findByPk(req.params.id);

    if (!trick) {
      return res.status(404).json({ message: "Truco no encontrado" });
    }

    res.status(200).json(trick);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un usuario
const updateTrick = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Trick.update(req.body, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ message: "Truco no encontrado" });
    }

    const updatedTricks = await Trick.findByPk(id);
    res.status(200).json(updatedTricks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un usuario

const deleteTrick = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Trick.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Truco no encontrado" });
    }

    res.status(204).json({ message: "Truco eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTrick,
  getAllTricks,
  getTrickByID,
  updateTrick,
  deleteTrick,
};
