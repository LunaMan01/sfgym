/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
     /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
     /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
     /*!40101 SET NAMES utf8 */;
     /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
     /*!40103 SET TIME_ZONE='+00:00' */;
     /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
     /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
     /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
     /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;




DROP TABLE IF EXISTS `aparatos`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `aparatos` (
  `Id_Aparato` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_aparato` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id_Aparato`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `aparatos` WRITE;

                     /*!40000 ALTER TABLE `aparatos` DISABLE KEYS */;
INSERT INTO aparatos VALUES("1","prensa");



/*!40000 ALTER TABLE `aparatos` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `clientes` (
  `Id_Cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_cliente` varchar(20) DEFAULT NULL,
  `apellido_paterno` varchar(15) DEFAULT NULL,
  `apellido_materno` varchar(15) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `Id_Genero` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_Cliente`),
  KEY `Id_Genero` (`Id_Genero`),
  CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`Id_Genero`) REFERENCES `generos` (`Id_Genero`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `clientes` WRITE;

                     /*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO clientes VALUES("1","Luis","Ceja","Luna","21","1","1");
INSERT INTO clientes VALUES("2","David","Ceja","Luna","21","1","1");



/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `compras` (
  `Id_Compra` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Instructor` int(11) NOT NULL,
  `Id_TipoCompra` int(11) NOT NULL,
  `descripcion_compra` varchar(50) DEFAULT NULL,
  `monto_compra` int(11) DEFAULT NULL,
  `fecha_compra` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Id_Compra`),
  KEY `Id_Instructor` (`Id_Instructor`),
  KEY `Id_TipoCompra` (`Id_TipoCompra`),
  CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`Id_Instructor`) REFERENCES `instructores` (`Id_Instructor`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`Id_TipoCompra`) REFERENCES `tipocompras` (`Id_TipoCompra`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `compras` WRITE;

                     /*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO compras VALUES("1","1","1","Protes","500","26/05/2019");
INSERT INTO compras VALUES("2","2","1","Loco","300","14/05/2019");



/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `direcciones` (
  `Id_Cliente` int(11) NOT NULL,
  `colonia` varchar(30) DEFAULT NULL,
  `calle` varchar(30) DEFAULT NULL,
  `numero_exterior` int(11) DEFAULT NULL,
  `numero_interior` int(11) DEFAULT NULL,
  KEY `Id_Cliente` (`Id_Cliente`),
  CONSTRAINT `direcciones_ibfk_1` FOREIGN KEY (`Id_Cliente`) REFERENCES `clientes` (`Id_Cliente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `direcciones` WRITE;

                     /*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO direcciones VALUES("1","Bugambilias","Canario","256","0");
INSERT INTO direcciones VALUES("2","Bugambilias","Canario","256","0");



/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `gastos`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `gastos` (
  `Id_Gasto` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_gasto` varchar(50) DEFAULT NULL,
  `monto_gasto` double DEFAULT NULL,
  `fecha_gasto` varchar(10) DEFAULT NULL,
  `Id_Tipo` int(11) NOT NULL,
  PRIMARY KEY (`Id_Gasto`),
  KEY `Id_Tipo` (`Id_Tipo`),
  CONSTRAINT `gastos_ibfk_1` FOREIGN KEY (`Id_Tipo`) REFERENCES `tipogastos` (`Id_Tipo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `gastos` WRITE;

                     /*!40000 ALTER TABLE `gastos` DISABLE KEYS */;
INSERT INTO gastos VALUES("1","Luz","400","29/05/2019","1");



/*!40000 ALTER TABLE `gastos` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `generos` (
  `Id_Genero` int(11) NOT NULL AUTO_INCREMENT,
  `sexo` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`Id_Genero`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `generos` WRITE;

                     /*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO generos VALUES("1","Masculino");
INSERT INTO generos VALUES("2","Femenino");
INSERT INTO generos VALUES("3","Otro");



/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `instructores`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `instructores` (
  `Id_Instructor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_instructor` varchar(20) DEFAULT NULL,
  `password1` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Id_Instructor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `instructores` WRITE;

                     /*!40000 ALTER TABLE `instructores` DISABLE KEYS */;
INSERT INTO instructores VALUES("1","Luna","123");
INSERT INTO instructores VALUES("2","Carlos","123");
INSERT INTO instructores VALUES("3","Alberto","123");



/*!40000 ALTER TABLE `instructores` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `membresias`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `membresias` (
  `Id_Membresia` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Cliente` int(11) NOT NULL,
  `fecha_inicio` varchar(10) DEFAULT NULL,
  `fecha_fin` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Id_Membresia`),
  KEY `Id_Cliente` (`Id_Cliente`),
  CONSTRAINT `membresias_ibfk_1` FOREIGN KEY (`Id_Cliente`) REFERENCES `clientes` (`Id_Cliente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `membresias` WRITE;

                     /*!40000 ALTER TABLE `membresias` DISABLE KEYS */;
INSERT INTO membresias VALUES("1","1","24/05/2019","24/06/2019");



/*!40000 ALTER TABLE `membresias` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `productos` (
  `Id_Producto` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_producto` varchar(50) DEFAULT NULL,
  `fecha_caducidad` varchar(10) DEFAULT NULL,
  `existencia_producto` int(11) DEFAULT NULL,
  `precio_producto` double DEFAULT NULL,
  PRIMARY KEY (`Id_Producto`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `productos` WRITE;

                     /*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO productos VALUES("1","Prote1","30/05/2019","93","10");
INSERT INTO productos VALUES("2","Prote2","31/05/2019","90","10");
INSERT INTO productos VALUES("3","Protes","","","");
INSERT INTO productos VALUES("4","Loco","","","");



/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `telefonos`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
                 /*!40101 SET character_set_client = utf8 */;

CREATE TABLE `telefonos` (
  `Id_Cliente` int(11) NOT NULL,
  `numero` varchar(12) DEFAULT NULL,
  KEY `Id_Cliente` (`Id_Cliente`),
  CONSTRAINT `telefonos_ibfk_1` FOREIGN KEY (`Id_Cliente`) REFERENCES `clientes` (`Id_Cliente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40101 SET character_set_client = @saved_cs_client */;LOCK TABLES `telefonos` WRITE;

                     /*!40000 ALTER TABLE `telefonos` DISABLE KEYS */;
INSERT INTO telefonos VALUES("1","341 122 8534");
INSERT INTO telefonos VALUES("2","341 122 8534");



/*!40000 ALTER TABLE `telefonos` ENABLE KEYS */;
UNLOCK TABLES;