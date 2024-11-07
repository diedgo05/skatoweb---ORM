const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const trickRoutes = require("./routes/trick");
const guideRoutes = require("./routes/guide");
const categoryRoutes = require("./routes/category");
const diffRoutes = require("./routes/difficulty");
const levelTrickRoutes = require("./routes/levelTrick");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Cargar rutas
app.use("/users", userRoutes);
app.use("/tricks", trickRoutes);
app.use("/guides", guideRoutes);
app.use("/category", categoryRoutes);
app.use("/difficulty", diffRoutes);
app.use("/lt", levelTrickRoutes);

module.exports = app;
