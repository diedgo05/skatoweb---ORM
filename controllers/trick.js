const { Trick } = require("../models");
const authenticateToken = require("../controllers/authMiddleware");
const config = require('../config/config.json');
const { where } = require("sequelize");
const SECRET_KEY = config.development.SECRET_KEY

// Controlador para crear un usuario
const createTrick = async (req, res) => {
  console.log(req.body); 
  try {
    const trick = await Trick.create(req.body);
    res.status(201).json(trick);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error)
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
    const tricks = await Trick.findAll({ where: { idUser: req.params.idUser } });

    if (!tricks || tricks.length === 0) {
      return res.status(404).json({ message: "No se encontraron trucos para este usuario" });
    }

    res.status(200).json(tricks);
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
