const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require('../config/config.json')
const SECRET_KEY = config.development.SECRET_KEY

// Controlador para crear un usuario
const createUser = async (req, res) => {
  try {
    const { password, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ ...userData, password: hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "8h", //tiempo de expiración del token
    });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un usuario por ID
const getUserByID = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json(user); // Devolvemos la información del usuario
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para actualizar un usuario
// const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [updated] = await User.update(req.body, {
//       where: { id }
//     });

//     if (!updated) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     const updatedUser = await User.findByPk(id);
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Controlador para eliminar un usuario

// const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await User.destroy({
//       where: { id }
//     });

//     if (!deleted) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(204).json({ message: 'Usuario eliminado' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = {
  createUser,
  getAllUsers,
  getUserByID,
  loginUser
};
