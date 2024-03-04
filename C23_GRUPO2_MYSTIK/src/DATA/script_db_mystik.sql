-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mystik_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mystik_db` ;

-- -----------------------------------------------------
-- Schema mystik_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mystik_db` DEFAULT CHARACTER SET utf8 ;
USE `mystik_db` ;

-- -----------------------------------------------------
-- Table `mystik_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`usuarios` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NOT NULL,
  `contrasenia` VARCHAR(100) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `telefono` VARCHAR(255) NOT NULL,
  `genero` VARCHAR(255) NULL DEFAULT NULL,
  `nacimiento` DATETIME NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `roles_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_usuarios_roles1_idx` (`roles_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `mystik_db`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`talles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`talles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_talle` VARCHAR(90) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`colecciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`colecciones` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_coleccion` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`categorias` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_categoria` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`colores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`colores` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_color` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`productos` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `stock` VARCHAR(45) NULL DEFAULT NULL,
  `talles_id` INT UNSIGNED NOT NULL,
  `colecciones_id` INT UNSIGNED NOT NULL,
  `categorias_id` INT UNSIGNED NOT NULL,
  `colores_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productos_talles1_idx` (`talles_id` ASC) VISIBLE,
  INDEX `fk_productos_colecciones1_idx` (`colecciones_id` ASC) VISIBLE,
  INDEX `fk_productos_categorias1_idx` (`categorias_id` ASC) VISIBLE,
  INDEX `fk_productos_colores1_idx` (`colores_id` ASC) VISIBLE,
  CONSTRAINT `fk_productos_talles1`
    FOREIGN KEY (`talles_id`)
    REFERENCES `mystik_db`.`talles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_colecciones1`
    FOREIGN KEY (`colecciones_id`)
    REFERENCES `mystik_db`.`colecciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_categorias1`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `mystik_db`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_colores1`
    FOREIGN KEY (`colores_id`)
    REFERENCES `mystik_db`.`colores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`imagenes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `file` VARCHAR(255) NULL DEFAULT NULL,
  `path` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `productos_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_imagenes_productos_idx` (`productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_imagenes_productos`
    FOREIGN KEY (`productos_id`)
    REFERENCES `mystik_db`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`direcciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`direcciones` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(255) NULL DEFAULT NULL,
  `ciudad` VARCHAR(255) NULL DEFAULT NULL,
  `provincia` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `usuarios_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_direcciones_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_direcciones_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mystik_db`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`estados` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`ordenes` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `total` INT NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `usuarios_id` INT UNSIGNED NOT NULL,
  `estados_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ordenes_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  INDEX `fk_ordenes_estados1_idx` (`estados_id` ASC) VISIBLE,
  CONSTRAINT `fk_ordenes_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `mystik_db`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ordenes_estados1`
    FOREIGN KEY (`estados_id`)
    REFERENCES `mystik_db`.`estados` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mystik_db`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mystik_db`.`items` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cantidad` INT NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `updatedAt` TIMESTAMP NULL DEFAULT NULL,
  `productos_id` INT UNSIGNED NOT NULL,
  `ordenes_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `productos_id`),
  INDEX `fk_items_productos1_idx` (`productos_id` ASC) VISIBLE,
  INDEX `fk_items_ordenes1_idx` (`ordenes_id` ASC) VISIBLE,
  CONSTRAINT `fk_items_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `mystik_db`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_items_ordenes1`
    FOREIGN KEY (`ordenes_id`)
    REFERENCES `mystik_db`.`ordenes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
