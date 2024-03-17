CREATE DATABASE  IF NOT EXISTS `mystik_db` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mystik_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: mystik_db
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'buzos'),(2,'remeras'),(3,'camperas');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colecciones`
--

DROP TABLE IF EXISTS `colecciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colecciones` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre_coleccion` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colecciones`
--

LOCK TABLES `colecciones` WRITE;
/*!40000 ALTER TABLE `colecciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `colecciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colores`
--

DROP TABLE IF EXISTS `colores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colores` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre_color` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colores`
--

LOCK TABLES `colores` WRITE;
/*!40000 ALTER TABLE `colores` DISABLE KEYS */;
INSERT INTO `colores` VALUES (1,'negro'),(2,'blanco'),(3,'gris');
/*!40000 ALTER TABLE `colores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `direccion` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `usuarios_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_direcciones_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_direcciones_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `estado` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `file` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `productos_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_imagenes_productos_idx` (`productos_id`),
  CONSTRAINT `fk_imagenes_productos` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `productos_id` int unsigned NOT NULL,
  `ordenes_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`,`productos_id`),
  KEY `fk_items_productos1_idx` (`productos_id`),
  KEY `fk_items_ordenes1_idx` (`ordenes_id`),
  CONSTRAINT `fk_items_ordenes1` FOREIGN KEY (`ordenes_id`) REFERENCES `ordenes` (`id`),
  CONSTRAINT `fk_items_productos1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `total` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `usuarios_id` int unsigned NOT NULL,
  `estados_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ordenes_usuarios1_idx` (`usuarios_id`),
  KEY `fk_ordenes_estados1_idx` (`estados_id`),
  CONSTRAINT `fk_ordenes_estados1` FOREIGN KEY (`estados_id`) REFERENCES `estados` (`id`),
  CONSTRAINT `fk_ordenes_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `stock` varchar(45) DEFAULT NULL,
  `talles_id` varchar(45) NOT NULL,
  `colecciones_id` int unsigned DEFAULT NULL,
  `categorias_id` varchar(45) NOT NULL,
  `colores_id` varchar(45) NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `imagen_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_talles1_idx` (`talles_id`),
  KEY `fk_productos_colecciones1_idx` (`colecciones_id`),
  KEY `fk_productos_categorias1_idx` (`categorias_id`),
  KEY `fk_productos_colores1_idx` (`colores_id`),
  CONSTRAINT `fk_productos_colecciones1` FOREIGN KEY (`colecciones_id`) REFERENCES `colecciones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (13,'Nike-Bones-Fire',45000,'Buzo Nike Algodón','4','3',NULL,'1','3','2024-03-17 18:59:18','2024-03-17 18:30:18','1710700218829_img_product_.jpg'),(14,'Skulls-Fire',45000,'Buzo de algodón','1','4',NULL,'1','3','2024-03-17 18:59:29','2024-03-17 18:32:44','1710700364401_img_product_.jpg'),(15,'Skulls',40000,'Buzo de algodón','4','3',NULL,'1','1','2024-03-17 19:01:19','2024-03-17 18:34:15','1710700455126_img_product_.jpg'),(16,'Darkness',30000,'Buzo de algodón','4','4',NULL,'1','1','2024-03-17 19:01:28','2024-03-17 18:35:16','1710700516189_img_product_.jpg'),(17,'White-Dragon',25000,'Buzo de algodón','3','3',NULL,'1','1','2024-03-17 19:01:38','2024-03-17 18:35:50','1710700550438_img_product_.jpg'),(18,'Black and Violet',60000,'Rompe viento impermeable','4','2',NULL,'3','1','2024-03-17 19:01:51','2024-03-17 18:38:08','1710700688833_img_product_.jpg'),(19,'Black and green',45000,'Rompe viento impermeable','2','4',NULL,'3','1','2024-03-17 19:02:10','2024-03-17 18:39:13','1710700753409_img_product_.jpg'),(20,' White and Violet',50000,'Rompe viento impermeable','3','3',NULL,'3','2','2024-03-17 19:02:18','2024-03-17 18:40:48','1710700848788_img_product_.jpg'),(21,'Cream',45000,'Campera impermeable','4','3',NULL,'3','2','2024-03-17 19:02:26','2024-03-17 18:41:29','1710700889361_img_product_.jpg'),(22,'White Jacket',45000,'Campera impermeable','3','2',NULL,'3','2','2024-03-17 19:02:36','2024-03-17 18:42:36','1710700956704_img_product_.jpg'),(23,'Black-Instagang',25000,'Remera oversize','7','3',NULL,'2','1','2024-03-17 18:55:36','2024-03-17 18:43:50','1710701030806_img_product_.jpg'),(24,'White-Gotic',20000,'Remera de algodón','4','4',NULL,'2','2','2024-03-17 18:55:58','2024-03-17 18:44:45','1710701085003_img_product_.jpg'),(25,'Dont-Care',23000,'Remera de algodón estilo oversize','4','4',NULL,'2','1','2024-03-17 19:02:49','2024-03-17 18:46:05','1710701165684_img_product_.png'),(26,'Gray - I don\'t care',15000,'Remera de algodón','4','3',NULL,'2','3','2024-03-17 19:03:02','2024-03-17 18:47:50','1710701270507_img_product_.jpg'),(27,'Gray - Skull',10000,'Remera de algodón','5','2',NULL,'2','3','2024-03-17 19:03:09','2024-03-17 18:48:39','1710701319500_img_product_.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user',NULL,NULL),(2,'admin',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240220201397-create-color.js'),('20240220201398-create-categoria.js'),('20240220201399-create-coleccion.js'),('20240220201400-create-talle.js'),('20240220201401-create-producto.js'),('20240220203313-create-estado.js'),('20240220203416-create-imagen.js'),('20240220203932-create-rol.js'),('20240220203933-create-usuario.js'),('20240220203934-create-direcciones.js'),('20240220203935-create-orden.js'),('20240220203936-create-item.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talles`
--

DROP TABLE IF EXISTS `talles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre_talle` varchar(90) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talles`
--

LOCK TABLES `talles` WRITE;
/*!40000 ALTER TABLE `talles` DISABLE KEYS */;
INSERT INTO `talles` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'XXL');
/*!40000 ALTER TABLE `talles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `nacimiento` datetime DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `roles_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_usuarios_roles1_idx` (`roles_id`),
  CONSTRAINT `fk_usuarios_roles1` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'Lautaro','Contreras','Lautarocontreras9@gmail.com','$2a$10$P/pUVc6Dw5ZphI0rotFMZOW6pBopWwHmfuuttHpCI8HU2Vg0rQEtG','default.png','03513549629',NULL,NULL,'2024-03-16 22:57:21','2024-03-16 22:57:21',2),(3,'Lautaro','Contreras','Lautaro@hotmail.com','$2a$10$IZ0tzFDFgiGrWrcT/o9vLObnI0hw7pYxU8NZKWhTNcBqqO6b5O4dC','default.png','03513549629',NULL,NULL,'2024-03-16 22:58:42','2024-03-16 22:58:42',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-17 16:15:42
