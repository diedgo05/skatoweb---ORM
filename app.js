const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const trickRoutes = require("./routes/trick");
const guideRoutes = require("./routes/guide");

const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use("/users", userRoutes);
app.use("/tricks", trickRoutes);
app.use("/guides", guideRoutes);

module.exports = app;
