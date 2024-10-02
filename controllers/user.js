const { User } = require('../models');

// Controlador para crear un usuario
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
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
    const user = await User.findByPk(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.status(200).json(user);
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
  getUserByID
};
