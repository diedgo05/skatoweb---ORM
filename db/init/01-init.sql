-- Esquema + datos semilla de la API SKATO.
-- MySQL ejecuta este archivo AUTOMÁTICAMENTE la primera vez que se crea el volumen.
--
-- Importante: los nombres de tabla coinciden EXACTAMENTE con los que genera Sequelize
-- (pluralización de los modelos). Así, cuando server.js llama a connection.sync(),
-- ve que las tablas ya existen (CREATE TABLE IF NOT EXISTS) y no hace nada raro,
-- evitando además el problema de orden de las llaves foráneas.

CREATE DATABASE IF NOT EXISTS `SKATOWeB`;
USE `SKATOWeB`;

-- ---------- Catálogos (sin dependencias) ----------
CREATE TABLE IF NOT EXISTS `LevelUsers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Difficulties` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `LevelTricks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---------- Usuarios (depende de LevelUsers) ----------
CREATE TABLE IF NOT EXISTS `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `joinDate` DATETIME NOT NULL,
  `idLevelUser` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_level` FOREIGN KEY (`idLevelUser`)
    REFERENCES `LevelUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ---------- Trucos (depende de Categories, Difficulties, LevelTricks, Users) ----------
CREATE TABLE IF NOT EXISTS `Tricks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `idCategory` INT NOT NULL,
  `idDifficulty` INT NOT NULL,
  `idLevelTrick` INT NOT NULL,
  `idUser` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_trick_category`   FOREIGN KEY (`idCategory`)   REFERENCES `Categories`(`id`)   ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_trick_difficulty` FOREIGN KEY (`idDifficulty`) REFERENCES `Difficulties`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_trick_level`      FOREIGN KEY (`idLevelTrick`) REFERENCES `LevelTricks`(`id`)  ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_trick_user`       FOREIGN KEY (`idUser`)       REFERENCES `Users`(`id`)        ON DELETE CASCADE ON UPDATE CASCADE
);

-- ---------- Guías (depende de Tricks; idUser referencia LevelUsers tal como en el modelo) ----------
CREATE TABLE IF NOT EXISTS `Guides` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `dateCreate` DATETIME NOT NULL,
  `idUser` INT NOT NULL,
  `idTrick` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_guide_user`  FOREIGN KEY (`idUser`)  REFERENCES `LevelUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_guide_trick` FOREIGN KEY (`idTrick`) REFERENCES `Tricks`(`id`)     ON DELETE CASCADE ON UPDATE CASCADE
);

-- ---------- Datos semilla ----------
-- Sin estos catálogos NO puedes registrar usuarios (idLevelUser) ni crear trucos.
INSERT INTO `LevelUsers`  (`name`) VALUES ('Principiante'), ('Intermedio'), ('Avanzado'), ('Pro');
INSERT INTO `Categories`  (`name`) VALUES ('Flatground'), ('Grinds'), ('Ramp'), ('Vert'), ('Street');
INSERT INTO `Difficulties`(`name`) VALUES ('Fácil'), ('Media'), ('Difícil'), ('Experto');
INSERT INTO `LevelTricks` (`name`) VALUES ('Básico'), ('Intermedio'), ('Avanzado');