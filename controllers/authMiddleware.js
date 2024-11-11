const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const SECRET_KEY = config.development.SECRET_KEY; // O ajusta según la configuración

const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    console.log("Token recibido:", token);
  
    if (!token) {
      return res.status(403).json({ message: "Acceso denegado. No se proporcionó token." });
    }
  
    const tokenWithoutBearer = token.split(" ")[1];
    console.log("Token sin Bearer:", tokenWithoutBearer);
  
    jwt.verify(tokenWithoutBearer, SECRET_KEY, (err, user) => {
      if (err) {
        console.log("Error de verificación del token:", err);
        return res.status(403).json({ message: "Token inválido" });
      }
      req.user = user;
      next(); 
    });
  };
  
module.exports = authenticateToken;
