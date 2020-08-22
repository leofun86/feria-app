-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-08-2020 a las 06:00:07
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `feria_app_bd`
--
CREATE DATABASE IF NOT EXISTS `feria_app_bd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `feria_app_bd`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comerciante`
--

CREATE TABLE `comerciante` (
  `ci` int(8) NOT NULL,
  `contrasenia` varchar(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `celular` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comerciante`
--

INSERT INTO `comerciante` (`ci`, `contrasenia`, `nombre`, `apellido`, `sexo`, `correo`, `celular`) VALUES
(49405770, 'contra2', 'Leandro', 'Funes', 'hombre', 'leorecord@hotmail.com', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion`
--

CREATE TABLE `informacion` (
  `ci_comerciante` int(8) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `whatsapp` int(9) DEFAULT NULL,
  `facebook` varchar(50) DEFAULT NULL,
  `instagram` varchar(50) DEFAULT NULL,
  `web` varchar(50) DEFAULT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `numero` int(4) DEFAULT NULL,
  `extra_calle` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modos_de_pago`
--

CREATE TABLE `modos_de_pago` (
  `ci_comerciante` int(8) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pruebas`
--

CREATE TABLE `pruebas` (
  `id` int(11) NOT NULL,
  `contenido` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pruebas`
--

INSERT INTO `pruebas` (`id`, `contenido`) VALUES
(4, 'Hola Mundo'),
(5, 'Este texto se enviará');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puesto`
--

CREATE TABLE `puesto` (
  `ci_comerciante` int(8) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo` varchar(8) NOT NULL,
  `descripcion_introductoria` varchar(250) DEFAULT NULL,
  `descripcion_detallada` varchar(500) DEFAULT NULL,
  `categoria` varchar(20) NOT NULL,
  `subcategoria` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comerciante`
--
ALTER TABLE `comerciante`
  ADD PRIMARY KEY (`ci`);

--
-- Indices de la tabla `informacion`
--
ALTER TABLE `informacion`
  ADD PRIMARY KEY (`ci_comerciante`);

--
-- Indices de la tabla `modos_de_pago`
--
ALTER TABLE `modos_de_pago`
  ADD PRIMARY KEY (`ci_comerciante`);

--
-- Indices de la tabla `pruebas`
--
ALTER TABLE `pruebas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `puesto`
--
ALTER TABLE `puesto`
  ADD PRIMARY KEY (`ci_comerciante`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pruebas`
--
ALTER TABLE `pruebas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `informacion`
--
ALTER TABLE `informacion`
  ADD CONSTRAINT `informacion_fk` FOREIGN KEY (`ci_comerciante`) REFERENCES `puesto` (`ci_comerciante`);

--
-- Filtros para la tabla `modos_de_pago`
--
ALTER TABLE `modos_de_pago`
  ADD CONSTRAINT `modos_de_pago_fk` FOREIGN KEY (`ci_comerciante`) REFERENCES `informacion` (`ci_comerciante`);

--
-- Filtros para la tabla `puesto`
--
ALTER TABLE `puesto`
  ADD CONSTRAINT `puesto_fk` FOREIGN KEY (`ci_comerciante`) REFERENCES `comerciante` (`ci`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
