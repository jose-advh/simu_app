-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2024 a las 17:47:55
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_simu`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enunciado`
--

CREATE TABLE `enunciado` (
  `id_enunciado` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `enunciado`
--

INSERT INTO `enunciado` (`id_enunciado`, `descripcion`) VALUES
(1, 'En un ecosistema, los organismos se clasifican como productores, consumidores y descomponedores.'),
(2, 'En la reproducción sexual, la combinación de material genético de dos padres genera diversidad genética.'),
(3, 'La fotosíntesis es un proceso esencial para los ecosistemas terrestres.'),
(4, 'En el cuerpo humano, las células tienen diferentes funciones dependiendo del tejido al que pertenecen.'),
(5, 'Los antibióticos son medicamentos que combaten infecciones bacterianas.'),
(6, 'El agua es una molécula polar.'),
(7, 'Las reacciones químicas pueden liberar o absorber energía.'),
(8, 'El pH es una medida de la acidez o alcalinidad de una solución.'),
(9, 'Los gases tienen propiedades diferentes a los líquidos y sólidos.'),
(10, 'Los elementos químicos se agrupan en la tabla periódica según sus propiedades.'),
(11, 'La gravedad es una fuerza que actúa sobre los objetos con masa.'),
(12, 'La energía puede transformarse de una forma a otra.'),
(13, 'La velocidad de un objeto describe su desplazamiento en un tiempo determinado.'),
(14, 'La luz se comporta como onda y partícula.'),
(15, 'En un circuito eléctrico, la corriente fluye debido a una diferencia de potencial.'),
(16, 'El movimiento de las placas tectónicas provoca terremotos y formación de montañas.'),
(17, 'El ciclo del agua es esencial para la vida en la Tierra.'),
(18, 'Los fósiles son evidencia de la vida pasada en la Tierra.'),
(19, 'El calentamiento global es causado principalmente por el aumento de gases de efecto invernadero.'),
(20, 'Los eclipses ocurren cuando un cuerpo celeste bloquea la luz de otro.'),
(21, 'Complete the sentence correctly.'),
(22, 'Select the correct question form.'),
(23, 'Choose the correct translation.'),
(24, 'Identify the correct tense.'),
(25, 'Select the correct preposition.'),
(26, 'Choose the word that completes the sentence.'),
(27, 'Select the correct synonym.'),
(28, 'Choose the correct comparative form.'),
(29, 'Choose the correct word order.'),
(30, 'Identify the correct question word.'),
(31, 'Identify the past participle.'),
(32, 'Choose the correct phrasal verb.'),
(33, 'Select the correct modal verb.'),
(34, 'Choose the correct meaning.'),
(35, 'Complete the sentence correctly.'),
(36, 'Choose the correct pronoun.'),
(37, 'Identify the correct conditional form.'),
(38, 'Select the correct adjective order.'),
(39, 'Choose the correct tag question.'),
(40, 'Select the correct use of \"there is/there are\".'),
(41, 'Choose the correct word to complete the sentence.'),
(42, 'Un artículo sobre la importancia de la educación destaca cómo el acceso a la tecnología mejora las oportunidades de aprendizaje.'),
(43, 'Un informe sobre el impacto de la tecnología en la salud menciona cómo los dispositivos móviles pueden generar estrés y ansiedad en los usuarios.'),
(44, 'En un ensayo sobre la economía global, se discute cómo la globalización afecta a las economías locales y a la distribución de la riqueza.'),
(45, 'En un artículo sobre el cambio climático, se argumenta que la acción inmediata es esencial para mitigar los efectos de las emisiones de gases de efecto invernadero.'),
(46, 'Un ensayo sobre el impacto de las redes sociales menciona cómo estas plataformas afectan las relaciones interpersonales y la salud mental.'),
(47, 'En un artículo sobre la educación en línea, se destacan los beneficios y desafíos del aprendizaje a distancia, especialmente en tiempos de pandemia.'),
(48, 'Un informe sobre la migración explica cómo las políticas migratorias afectan a los migrantes, especialmente a los refugiados.'),
(49, 'En un artículo sobre sostenibilidad, se analizan las estrategias para reducir el consumo de recursos naturales y minimizar la huella de carbono.'),
(50, 'En un estudio sobre el trabajo remoto, se exploran las ventajas y desventajas de esta modalidad laboral para las empresas y empleados.'),
(51, 'Un artículo sobre la salud mental destaca la importancia de reconocer los signos de depresión y ansiedad en las personas jóvenes.'),
(52, 'En un informe sobre el futuro de la educación, se aborda cómo la inteligencia artificial está cambiando el panorama educativo.'),
(53, 'Un artículo sobre el veganismo menciona cómo la adopción de una dieta vegana puede contribuir a la reducción del impacto ambiental.'),
(54, 'En un ensayo sobre la desigualdad de género, se analiza cómo las mujeres siguen enfrentando desafíos en el ámbito laboral y social.'),
(55, 'Un artículo sobre la sostenibilidad social explica cómo las políticas públicas pueden mejorar las condiciones de vida en comunidades marginadas.'),
(56, 'En un informe sobre el envejecimiento de la población, se discuten los desafíos económicos y sociales que enfrentan los países con una población mayoritaria de personas mayores.'),
(57, 'Un ensayo analiza los beneficios del ejercicio regular para la salud mental, mencionando la reducción de estrés y la mejora del ánimo.'),
(58, 'Un artículo sobre la sostenibilidad menciona cómo la reducción del consumo de plásticos puede disminuir la contaminación en los océanos.'),
(59, 'En un artículo sobre la educación, se afirma que el uso de tecnología en las aulas puede mejorar la experiencia de aprendizaje, pero que su implementación debe ser cuidadosa.'),
(60, 'Un artículo sobre la importancia de la lectura afirma que leer no solo mejora el vocabulario, sino también la capacidad de concentración.'),
(61, 'En un informe sobre el cambio climático, se describe cómo la actividad humana está acelerando el proceso, afectando el clima global de manera irreversible.'),
(62, 'Resolver la ecuación 2x - 3 = 7'),
(63, 'El área de un círculo es A = π r^2. Si el radio de un círculo es 6 cm, ¿cuál es su área?'),
(64, 'Suma las fracciones 3/4 y 5/8'),
(65, 'Un artículo tiene un precio original de 200 dólares y está en descuento del 25%. ¿Cuál es el precio final del artículo después del descuento?'),
(66, 'Los números 4, 7, 9, 12, 15 representan las edades de 5 personas. ¿Cuál es la mediana de estas edades?'),
(67, 'Resuelve la ecuación 3x + 4 = 16'),
(68, 'Si la base de un triángulo es 10 cm y su altura es 5 cm, ¿cuál es su área?'),
(69, 'La secuencia 2, 5, 8, 11, ... es una progresión aritmética. ¿Cuál es el valor del séptimo término?'),
(70, 'Un rectángulo de 10 cm por 6 cm tiene un círculo de radio 3 cm inscrito. ¿Cuál es el área restante del rectángulo fuera del círculo?'),
(71, 'Resuelve la ecuación 4x - 7 = 9'),
(72, 'Si la ecuación de una recta es y = 3x + 2, ¿cuál es el valor de y cuando x = 5?'),
(73, '¿Cuál es la raíz cuadrada de 81?'),
(74, 'Un prisma rectangular tiene dimensiones 4 cm, 5 cm y 6 cm. ¿Cuál es su volumen?'),
(75, 'Resuelve el sistema de ecuaciones: 2x + y = 6, x - y = 2'),
(76, 'En un triángulo rectángulo, el cateto opuesto al ángulo de 30° mide 3 cm. ¿Cuál es la longitud de la hipotenusa?'),
(77, 'Si x^2 - 5x + 6 = 0, ¿cuáles son las raíces de la ecuación?'),
(78, 'Un precio aumenta un 15%. Si el precio original era 2000 pesos, ¿cuál es el nuevo precio?'),
(79, 'Resuelve la ecuación 5(x - 2) = 20'),
(80, 'En una bolsa hay 3 bolas rojas, 4 bolas verdes y 5 bolas azules. Si se extrae una bola al azar, ¿cuál es la probabilidad de que sea verde?'),
(81, 'Si el ángulo θ es tal que cos θ = 1/2, ¿cuál es el valor de θ?'),
(82, 'La Revolución Francesa fue un evento histórico que tuvo lugar en Francia en 1789. Fue una lucha contra la monarquía absoluta y las desigualdades sociales.'),
(83, 'La Edad Media fue un período histórico que comenzó con la caída del Imperio Romano de Occidente en 476 d.C. y terminó con el Renacimiento.'),
(84, 'Cristóbal Colón fue un navegante genovés que, en 1492, llegó a América buscando una nueva ruta hacia Asia.'),
(85, 'El Imperio Romano fue una de las civilizaciones más poderosas de la antigüedad, que existió durante más de 500 años.'),
(86, 'La Guerra Fría fue un conflicto ideológico entre los Estados Unidos y la Unión Soviética que duró desde el final de la Segunda Guerra Mundial hasta principios de los 90.'),
(87, 'La Revolución Industrial comenzó a fines del siglo XVIII en Gran Bretaña y se extendió a otros países, cambiando la producción y el transporte a nivel mundial.'),
(88, 'Simón Bolívar fue un líder militar y político que desempeñó un papel clave en la independencia de varios países sudamericanos.'),
(89, 'La independencia de México comenzó con el Grito de Dolores en 1810, liderado por Miguel Hidalgo.'),
(90, 'La Revolución Rusa de 1917 derrocó al zar Nicolás II y dio lugar a la creación del primer estado comunista bajo la dirección de Lenin.'),
(91, 'El sistema feudal fue una organización social y económica que predominó en Europa durante la Edad Media.'),
(92, 'La democracia ateniense, en la Antigua Grecia, fue uno de los primeros ejemplos de un sistema de gobierno basado en la participación directa de los ciudadanos.'),
(93, 'La Primera Guerra Mundial fue un conflicto militar global que tuvo lugar entre 1914 y 1918, involucrando muchas de las principales potencias mundiales.'),
(94, 'El Tratado de Versalles puso fin a la Primera Guerra Mundial en 1919, imponiendo severas sanciones a Alemania.'),
(95, 'La Revolución Mexicana fue un conflicto armado iniciado en 1910 que buscaba terminar con el régimen dictatorial de Porfirio Díaz.'),
(96, 'El Renacimiento fue un período de gran florecimiento cultural en Europa, que tuvo lugar entre los siglos XIV y XVI, con un renacer del arte, la ciencia y la literatura.'),
(97, 'La caída del Muro de Berlín en 1989 simbolizó el fin de la división de Alemania y la culminación de la Guerra Fría.'),
(98, 'La Edad de los Descubrimientos fue un período histórico durante los siglos XV y XVI en el que los exploradores europeos viajaron a nuevas tierras.'),
(99, 'La lucha por los derechos civiles en los Estados Unidos alcanzó su punto culminante en la década de 1960, con figuras como Martin Luther King Jr. luchando por la igualdad racial.'),
(100, 'La Organización de las Naciones Unidas (ONU) fue creada en 1945 con el objetivo de mantener la paz y la seguridad internacional.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `intento`
--

CREATE TABLE `intento` (
  `id_intento` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `hora_final` time DEFAULT NULL,
  `puntuacion_Matematicas` float DEFAULT NULL,
  `puntuacion_Lectura` float DEFAULT NULL,
  `puntuacion_Sociales` float DEFAULT NULL,
  `puntuacion_Naturales` float DEFAULT NULL,
  `puntuacion_Ingles` float DEFAULT NULL,
  `puntuacion_general` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` varchar(2) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `nombre`) VALUES
('cn', 'Ciencias naturales'),
('in', 'Ingles'),
('lc', 'Lectura critica'),
('ma', 'Matematicas'),
('sc', 'Sociales y ciudadania');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcion`
--

CREATE TABLE `opcion` (
  `pregunta_id` int(11) DEFAULT NULL,
  `texto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `opcion`
--

INSERT INTO `opcion` (`pregunta_id`, `texto`) VALUES
(1, 'Producir energía a través de la fotosíntesis'),
(1, 'Descomponer materia orgánica en nutrientes'),
(1, 'Transportar nutrientes a otras plantas'),
(1, 'Crear oxígeno para los animales'),
(2, 'Incrementar la población rápidamente'),
(2, 'Incrementar la capacidad de adaptación a cambios ambientales'),
(2, 'Reducir el riesgo de enfermedades genéticas'),
(2, 'Facilitar la clonación de individuos'),
(3, 'Oxígeno'),
(3, 'Glucosa'),
(3, 'Agua'),
(3, 'Dióxido de carbono'),
(4, 'Glóbulos rojos'),
(4, 'Células madre'),
(4, 'Neuronas'),
(4, 'Plaquetas'),
(5, 'Porque los virus no tienen estructuras celulares'),
(5, 'Porque los virus no se reproducen por sí mismos'),
(5, 'Porque los antibióticos matan solo bacterias'),
(5, 'Porque los virus tienen una pared celular resistente'),
(6, 'Su densidad'),
(6, 'Su polaridad'),
(6, 'Su estado líquido'),
(6, 'Su capacidad térmica'),
(7, 'Endotérmica'),
(7, 'Exotérmica'),
(7, 'Catabólica'),
(7, 'Oxidante'),
(8, '5'),
(8, '6'),
(8, '7'),
(8, '8'),
(9, 'Las partículas están unidas firmemente'),
(9, 'Las partículas están en constante movimiento'),
(9, 'Las partículas tienen formas definidas'),
(9, 'Las partículas no tienen energía cinética'),
(10, 'Tienen el mismo número de protones'),
(10, 'Tienen masas atómicas similares'),
(10, 'Tienen el mismo número de electrones de valencia'),
(10, 'Tienen el mismo tamaño'),
(11, 'Su peso aumenta'),
(11, 'Su peso disminuye'),
(11, 'Su masa disminuye'),
(11, 'Su volumen aumenta'),
(12, 'Luminosa'),
(12, 'Térmica y cinética'),
(12, 'Sonora y eléctrica'),
(12, 'Química y potencial'),
(13, 'Velocidad'),
(13, 'Aceleración'),
(13, 'Inercia'),
(13, 'Fuerza'),
(14, 'La difracción'),
(14, 'La reflexión'),
(14, 'La refracción'),
(14, 'El ángulo de incidencia'),
(15, 'Voltios'),
(15, 'Watts'),
(15, 'Amperios'),
(15, 'Ohmios'),
(16, 'Límite convergente'),
(16, 'Límite transformante'),
(16, 'Límite divergente'),
(16, 'Límite estacionario'),
(17, 'Condensación'),
(17, 'Evaporación'),
(17, 'Precipitación'),
(17, 'Infiltración'),
(18, 'Roca ígnea'),
(18, 'Roca sedimentaria'),
(18, 'Roca metamórfica'),
(18, 'Roca volcánica'),
(19, 'Metano (CH₄)'),
(19, 'Dióxido de carbono (CO₂)'),
(19, 'Óxidos de nitrógeno (NOx)'),
(19, 'Clorofluorocarbonos (CFCs)'),
(20, 'Eclipse lunar'),
(20, 'Eclipse solar'),
(20, 'Eclipse anular'),
(20, 'Eclipse parcial'),
(21, 'goes'),
(21, 'went'),
(21, 'going'),
(21, 'to go'),
(22, 'Does'),
(22, 'Do'),
(22, 'Is'),
(22, 'Are'),
(23, 'Book'),
(23, 'Notebook'),
(23, 'Pen'),
(23, 'Dictionary'),
(24, 'did'),
(24, 'do'),
(24, 'done'),
(24, 'doing'),
(25, 'to'),
(25, 'in'),
(25, 'on'),
(25, 'at'),
(26, 'are'),
(26, 'is'),
(26, 'am'),
(26, 'were'),
(27, 'Large'),
(27, 'Big'),
(27, 'Huge'),
(27, 'Tall'),
(28, 'faster'),
(28, 'faster than'),
(28, 'more faster'),
(28, 'most fast'),
(29, 'is it'),
(29, 'are they'),
(29, 'do you'),
(29, 'can we'),
(30, 'Who'),
(30, 'What'),
(30, 'Where'),
(30, 'How'),
(31, 'written'),
(31, 'writed'),
(31, 'writing'),
(31, 'write'),
(32, 'wakes up'),
(32, 'wake up'),
(32, 'woke up'),
(32, 'wake'),
(33, 'should'),
(33, 'must'),
(33, 'could'),
(33, 'can'),
(34, 'Needing food'),
(34, 'Feeling sleepy'),
(34, 'Hungry'),
(34, 'Full'),
(35, 'went'),
(35, 'go'),
(35, 'going'),
(35, 'gone'),
(36, 'mine'),
(36, 'my'),
(36, 'hers'),
(36, 'their'),
(37, 'will'),
(37, 'would'),
(37, 'may'),
(37, 'can'),
(38, 'beautiful long red'),
(38, 'red long beautiful'),
(38, 'long beautiful red'),
(38, 'beautiful red long'),
(39, 'don’t you'),
(39, 'do you'),
(39, 'aren’t you'),
(39, 'you don’t'),
(40, 'There are'),
(40, 'There is'),
(40, 'There were'),
(40, 'There have'),
(41, 'runs'),
(41, 'run'),
(41, 'running'),
(41, 'to run'),
(42, 'El acceso a la tecnología mejora las oportunidades de aprendizaje.'),
(42, 'La tecnología ha causado una gran brecha social.'),
(42, 'La tecnología tiene poco impacto en la educación.'),
(42, 'El uso de la tecnología está limitado a las ciudades grandes.'),
(43, 'Los dispositivos móviles pueden generar estrés y ansiedad.'),
(43, 'La tecnología mejora la salud mental.'),
(43, 'Los dispositivos móviles ayudan a concentrarse mejor.'),
(43, 'El uso de dispositivos móviles no tiene impacto en la salud.'),
(44, 'La globalización afecta a las economías locales y a la distribución de la riqueza.'),
(44, 'La economía global solo afecta a las grandes empresas.'),
(44, 'La globalización no tiene impacto en los países en desarrollo.'),
(44, 'La economía global solo beneficia a los países ricos.'),
(45, 'La acción inmediata es esencial para mitigar los efectos de las emisiones de gases de efecto invernadero.'),
(45, 'El cambio climático no es tan urgente como se ha mencionado.'),
(45, 'El cambio climático es un fenómeno natural que no se puede detener.'),
(45, 'La falta de acción sobre el cambio climático no afecta a la vida diaria.'),
(46, 'Las redes sociales afectan las relaciones interpersonales y la salud mental.'),
(46, 'Las redes sociales son beneficiosas para las relaciones interpersonales.'),
(46, 'El uso de redes sociales no afecta la salud mental.'),
(46, 'Las redes sociales son solo una distracción sin consecuencias reales.'),
(47, 'Los beneficios y desafíos del aprendizaje a distancia, especialmente en tiempos de pandemia.'),
(47, 'La educación en línea es ineficaz y no debería usarse.'),
(47, 'La educación en línea es igual que la educación presencial.'),
(47, 'El aprendizaje a distancia no tiene ventajas claras.'),
(48, 'Las políticas migratorias afectan a los migrantes, especialmente a los refugiados.'),
(48, 'La migración es un fenómeno completamente positivo para todos los países.'),
(48, 'Las políticas migratorias no afectan a los migrantes de forma significativa.'),
(48, 'La migración no tiene impacto en las economías locales.'),
(49, 'Las estrategias para reducir el consumo de recursos naturales y minimizar la huella de carbono.'),
(49, 'La sostenibilidad no tiene impacto en el bienestar social.'),
(49, 'El consumo de recursos naturales es necesario para el desarrollo económico.'),
(49, 'No existen alternativas viables para reducir la huella de carbono.'),
(50, 'Las ventajas y desventajas de esta modalidad laboral para las empresas y empleados.'),
(50, 'El trabajo remoto ha eliminado las barreras geográficas para muchas empresas.'),
(50, 'El trabajo remoto no tiene desventajas para los empleados.'),
(50, 'El trabajo remoto no es tan popular como se cree.'),
(51, 'La importancia de reconocer los signos de depresión y ansiedad en las personas jóvenes.'),
(51, 'Los jóvenes no experimentan problemas de salud mental.'),
(51, 'La salud mental es menos importante que la salud física en los jóvenes.'),
(51, 'La depresión y la ansiedad son problemas que solo afectan a los adultos.'),
(52, 'Cómo la inteligencia artificial está cambiando el panorama educativo.'),
(52, 'La inteligencia artificial no tiene lugar en el ámbito educativo.'),
(52, 'La inteligencia artificial está afectando negativamente a la educación.'),
(52, 'La inteligencia artificial ayuda a personalizar la enseñanza y mejorar los resultados educativos.'),
(53, 'La adopción de una dieta vegana puede contribuir a la reducción del impacto ambiental.'),
(53, 'El veganismo no tiene impacto en el medio ambiente.'),
(53, 'El veganismo no es sostenible a largo plazo.'),
(53, 'Una dieta vegana no afecta a las emisiones de gases de efecto invernadero.'),
(54, 'Las mujeres siguen enfrentando desafíos en el ámbito laboral y social.'),
(54, 'La igualdad de género se ha logrado por completo.'),
(54, 'Los hombres siguen enfrentando más desafíos que las mujeres en el ámbito laboral.'),
(54, 'La desigualdad de género es un problema del pasado.'),
(55, 'Las políticas públicas pueden mejorar las condiciones de vida en comunidades marginadas.'),
(55, 'Las políticas públicas no tienen impacto en las condiciones de vida de las comunidades marginadas.'),
(55, 'Las comunidades marginadas se benefician solo de la acción privada.'),
(55, 'Las políticas públicas no afectan la distribución de recursos en comunidades marginadas.'),
(56, 'Los desafíos económicos y sociales que enfrentan los países con una población mayoritaria de personas mayores.'),
(56, 'El envejecimiento de la población no representa un desafío para los países desarrollados.'),
(56, 'Las personas mayores son una carga para la economía de un país.'),
(56, 'El envejecimiento de la población mejora la economía de los países.'),
(57, 'La reducción de estrés y la mejora del ánimo.'),
(57, 'El ejercicio regular no tiene impacto en el bienestar emocional.'),
(57, 'El ejercicio solo es importante para mejorar la salud física.'),
(57, 'El ejercicio regular es beneficioso para la salud física y mental.'),
(58, 'La reducción del consumo de plásticos puede disminuir la contaminación en los océanos.'),
(58, 'La reducción de plásticos no tiene impacto en la contaminación del océano.'),
(58, 'Los plásticos son biodegradables y no contaminan el medio ambiente.'),
(58, 'El reciclaje de plásticos es suficiente para reducir la contaminación en los océanos.'),
(59, 'El uso de tecnología en las aulas puede mejorar la experiencia de aprendizaje, pero debe implementarse cuidadosamente.'),
(59, 'La tecnología en las aulas no mejora la experiencia de aprendizaje.'),
(59, 'La tecnología debería eliminarse de las aulas para una educación más efectiva.'),
(59, 'La implementación de tecnología en las aulas mejora los resultados de aprendizaje.'),
(60, 'Leer mejora el vocabulario y la capacidad de concentración.'),
(60, 'La lectura no tiene impacto en el desarrollo cognitivo.'),
(60, 'Leer no mejora la capacidad de concentración.'),
(60, 'La lectura mejora el vocabulario, la concentración y la comprensión.'),
(61, 'La actividad humana está acelerando el proceso, afectando el clima global de manera irreversible.'),
(61, 'El cambio climático no es causado por la actividad humana.'),
(61, 'El cambio climático es un fenómeno natural y no se puede detener.'),
(61, 'La actividad humana tiene poco impacto en el cambio climático.'),
(82, '1776'),
(82, '1789'),
(82, '1800'),
(82, '1799'),
(83, 'A finales del siglo XIII'),
(83, 'A finales del siglo XV'),
(83, 'A finales del siglo XVII'),
(83, 'A finales del siglo XIV'),
(84, '1492'),
(84, '1489'),
(84, '1500'),
(84, '1475'),
(85, '476 d.C.'),
(85, '500 d.C.'),
(85, '550 d.C.'),
(85, '425 d.C.'),
(86, 'Estados Unidos y la Unión Soviética'),
(86, 'Reino Unido y Alemania'),
(86, 'Francia y Japón'),
(86, 'China y Rusia'),
(87, 'Francia'),
(87, 'Alemania'),
(87, 'En Gran Bretaña'),
(87, 'Italia'),
(88, 'Venezuela, Colombia, Ecuador, Perú y Bolivia'),
(88, 'Argentina, Brasil y Uruguay'),
(88, 'México, Costa Rica y Panamá'),
(88, 'Chile, Paraguay y Perú'),
(89, 'Miguel Hidalgo'),
(89, 'José María Morelos'),
(89, 'Vicente Guerrero'),
(89, 'Emiliano Zapata'),
(90, 'Lenin'),
(90, 'Trotsky'),
(90, 'Stalin'),
(90, 'Kerensky'),
(91, 'Los monarcas o reyes'),
(91, 'Los nobles'),
(91, 'Los campesinos'),
(91, 'Los comerciantes'),
(92, 'Esparta'),
(92, 'Roma'),
(92, 'Atenas'),
(92, 'Corinto'),
(93, '1914'),
(93, '1912'),
(93, '1916'),
(93, '1920'),
(94, '1919'),
(94, '1921'),
(94, '1920'),
(94, '1922'),
(95, 'Porfirio Díaz'),
(95, 'Venustiano Carranza'),
(95, 'Emiliano Zapata'),
(95, 'Francisco Villa'),
(96, 'Entre los siglos XIV y XVI'),
(96, 'Entre los siglos XV y XVII'),
(96, 'Entre los siglos XIII y XV'),
(96, 'Entre los siglos XVI y XVII'),
(97, '1989'),
(97, '1987'),
(97, '1990'),
(97, '1985'),
(98, 'Siglos XV y XVI'),
(98, 'Siglos XIII y XIV'),
(98, 'Siglos XVI y XVII'),
(98, 'Siglos XIV y XV'),
(99, 'Martin Luther King Jr.'),
(99, 'Malcolm X'),
(99, 'Rosa Parks'),
(99, 'Frederick Douglass'),
(100, '1776'),
(100, '1783'),
(100, '1800'),
(100, '1750'),
(62, 'x = 3'),
(62, 'x = 5'),
(62, 'x = 7'),
(62, 'x = 10'),
(63, '18 cm²'),
(63, '36 cm²'),
(63, '48 cm²'),
(63, '12 cm²'),
(64, '1'),
(64, '5/8'),
(64, '7/8'),
(64, '3/4'),
(65, '150 dólares'),
(65, '175 dólares'),
(65, '180 dólares'),
(65, '200 dólares'),
(66, '4'),
(66, '7'),
(66, '9'),
(66, '12'),
(67, '2'),
(67, '3'),
(67, '4'),
(67, '5'),
(68, '20 cm²'),
(68, '25 cm²'),
(68, '30 cm²'),
(68, '35 cm²'),
(69, '16'),
(69, '18'),
(69, '20'),
(69, '22'),
(70, '35 cm²'),
(70, '40 cm²'),
(70, '45 cm²'),
(70, '50 cm²'),
(71, '3'),
(71, '4'),
(71, '5'),
(71, '6'),
(72, '10'),
(72, '15'),
(72, '17'),
(72, '20'),
(73, '7'),
(73, '8'),
(73, '9'),
(73, '10'),
(74, '100 cm³'),
(74, '120 cm³'),
(74, '140 cm³'),
(74, '160 cm³'),
(75, 'x = 2, y = 4'),
(75, 'x = 3, y = 1'),
(75, 'x = 5, y = 2'),
(75, 'x = 6, y = 3'),
(76, '4 cm'),
(76, '5 cm'),
(76, '6 cm'),
(76, '7 cm'),
(77, 'x = 1, x = 6'),
(77, 'x = 2, x = 3'),
(77, 'x = 3, x = 4'),
(77, 'x = 4, x = 5'),
(78, '2100'),
(78, '2300'),
(78, '2400'),
(78, '2500'),
(79, '4'),
(79, '5'),
(79, '6'),
(79, '7'),
(80, '30°'),
(80, '45°'),
(80, '60°'),
(80, '90°'),
(81, '30°'),
(81, '45°'),
(81, '60°'),
(81, '120°');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `id_pregunta` int(11) NOT NULL,
  `materia_id` varchar(2) DEFAULT NULL,
  `enunciado_id` int(11) DEFAULT NULL,
  `pregunta` varchar(255) DEFAULT NULL,
  `es_correcta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`id_pregunta`, `materia_id`, `enunciado_id`, `pregunta`, `es_correcta`) VALUES
(1, 'cn', 1, '¿Cuál es el principal rol de los descomponedores en el ciclo de los nutrientes?', 'Descomponer materia orgánica en nutrientes'),
(2, 'cn', 2, '¿Cuál es la principal ventaja de la diversidad genética en una población?', 'Incrementar la capacidad de adaptación a cambios ambientales'),
(3, 'cn', 3, '¿Cuál es el principal producto de la fotosíntesis utilizado por los consumidores primarios?', 'Glucosa'),
(4, 'cn', 4, '¿Qué tipo de células son responsables de transmitir impulsos nerviosos?', 'Neuronas'),
(5, 'cn', 5, '¿Por qué los antibióticos no son efectivos contra los virus?', 'Porque los virus no tienen estructuras celulares'),
(6, 'cn', 6, '¿Qué propiedad del agua está relacionada con su capacidad para disolver muchas sustancias?', 'Su polaridad'),
(7, 'cn', 7, '¿Cómo se llama una reacción que libera energía en forma de calor?', 'Exotérmica'),
(8, 'cn', 8, '¿Qué valor de pH indica una solución neutra?', '7'),
(9, 'cn', 9, '¿Cuál es la principal característica de los gases según la teoría cinética?', 'Las partículas están en constante movimiento'),
(10, 'cn', 10, '¿Qué tienen en común los elementos de un mismo grupo en la tabla periódica?', 'Tienen el mismo número de electrones de valencia'),
(11, 'cn', 11, '¿Qué le sucede a un objeto cuando la fuerza gravitacional sobre él aumenta?', 'Su peso aumenta'),
(12, 'cn', 12, '¿Qué tipo de energía se produce al quemar combustible en un motor?', 'Térmica y cinética'),
(13, 'cn', 13, '¿Cómo se llama el cambio de velocidad por unidad de tiempo?', 'Aceleración'),
(14, 'cn', 14, '¿Qué fenómeno demuestra la naturaleza ondulatoria de la luz?', 'La difracción'),
(15, 'cn', 15, '¿Qué unidad se utiliza para medir la corriente eléctrica?', 'Amperios'),
(16, 'cn', 16, '¿Cómo se llama el límite donde dos placas se separan?', 'Límite divergente'),
(17, 'cn', 17, '¿Qué proceso del ciclo del agua convierte el agua líquida en vapor?', 'Evaporación'),
(18, 'cn', 18, '¿Qué tipo de roca es más probable que contenga fósiles?', 'Roca sedimentaria'),
(19, 'cn', 19, '¿Cuál es el principal gas de efecto invernadero producido por actividades humanas?', 'Dióxido de carbono (CO₂)'),
(20, 'cn', 20, '¿Qué tipo de eclipse ocurre cuando la Luna bloquea la luz del Sol hacia la Tierra?', 'Eclipse solar'),
(21, 'in', 21, 'She ___ to the store every day.', 'goes'),
(22, 'in', 22, '___ your brother like pizza?', 'Does'),
(23, 'in', 23, 'How do you say \"libro\" in English?', 'Book'),
(24, 'in', 24, 'He ___ his homework yesterday.', 'did'),
(25, 'in', 25, 'I am going ___ the park.', 'to'),
(26, 'in', 26, 'They ___ watching a movie now.', 'are'),
(27, 'in', 27, 'Which word is a synonym for \"big\"?', 'Large'),
(28, 'in', 28, 'This car is ___ than that one.', 'faster'),
(29, 'in', 29, 'What time ___?', 'is it'),
(30, 'in', 30, '___ is your best friend?', 'Who'),
(31, 'in', 31, 'The past participle of \"write\" is ___.', 'written'),
(32, 'in', 32, 'She ___ up early every day.', 'wakes up'),
(33, 'in', 33, 'You ___ study harder to pass the exam.', 'should'),
(34, 'in', 34, 'What does \"hungry\" mean?', 'Needing food'),
(35, 'in', 35, 'They ___ to the beach last summer.', 'went'),
(36, 'in', 36, 'This is my book. That is ___.', 'mine'),
(37, 'in', 37, 'If it rains, I ___ stay home.', 'will'),
(38, 'in', 38, 'She bought a ___ dress.', 'beautiful long red'),
(39, 'in', 39, 'You like coffee, ___?', 'don’t you'),
(40, 'in', 40, '___ many books on the shelf.', 'There are'),
(41, 'in', 41, 'She ___ in the park every weekend.', 'runs'),
(42, 'lc', 42, '¿Qué se destaca en el artículo sobre la importancia de la educación?', 'El acceso a la tecnología mejora las oportunidades de aprendizaje.'),
(43, 'lc', 43, '¿Qué menciona el informe sobre el impacto de la tecnología en la salud?', 'Los dispositivos móviles pueden generar estrés y ansiedad.'),
(44, 'lc', 44, '¿Qué se discute en el ensayo sobre la economía global?', 'La globalización afecta a las economías locales y a la distribución de la riqueza.'),
(45, 'lc', 45, '¿Qué argumenta el artículo sobre el cambio climático?', 'La acción inmediata es esencial para mitigar los efectos de las emisiones de gases de efecto invernadero.'),
(46, 'lc', 46, '¿Qué menciona el ensayo sobre el impacto de las redes sociales?', 'Las redes sociales afectan las relaciones interpersonales y la salud mental.'),
(47, 'lc', 47, '¿Qué se destaca en el artículo sobre la educación en línea?', 'Los beneficios y desafíos del aprendizaje a distancia, especialmente en tiempos de pandemia.'),
(48, 'lc', 48, '¿Qué explica el informe sobre la migración?', 'Las políticas migratorias afectan a los migrantes, especialmente a los refugiados.'),
(49, 'lc', 49, '¿Qué se analiza en el artículo sobre sostenibilidad?', 'Las estrategias para reducir el consumo de recursos naturales y minimizar la huella de carbono.'),
(50, 'lc', 50, '¿Qué se explora en el estudio sobre el trabajo remoto?', 'Las ventajas y desventajas de esta modalidad laboral para las empresas y empleados.'),
(51, 'lc', 51, '¿Qué destaca el artículo sobre la salud mental?', 'La importancia de reconocer los signos de depresión y ansiedad en las personas jóvenes.'),
(52, 'lc', 52, '¿Qué aborda el informe sobre el futuro de la educación?', 'Cómo la inteligencia artificial está cambiando el panorama educativo.'),
(53, 'lc', 53, '¿Qué menciona el artículo sobre el veganismo?', 'La adopción de una dieta vegana puede contribuir a la reducción del impacto ambiental.'),
(54, 'lc', 54, '¿Qué se analiza en el ensayo sobre la desigualdad de género?', 'Las mujeres siguen enfrentando desafíos en el ámbito laboral y social.'),
(55, 'lc', 55, '¿Qué explica el artículo sobre la sostenibilidad social?', 'Las políticas públicas pueden mejorar las condiciones de vida en comunidades marginadas.'),
(56, 'lc', 56, '¿Qué se discute en el informe sobre el envejecimiento de la población?', 'Los desafíos económicos y sociales que enfrentan los países con una población mayoritaria de personas mayores.'),
(57, 'lc', 57, '¿Qué analiza el ensayo sobre los beneficios del ejercicio regular?', 'La reducción de estrés y la mejora del ánimo.'),
(58, 'lc', 58, '¿Qué menciona el artículo sobre la sostenibilidad?', 'La reducción del consumo de plásticos puede disminuir la contaminación en los océanos.'),
(59, 'lc', 59, '¿Qué afirma el artículo sobre la educación?', 'El uso de tecnología en las aulas puede mejorar la experiencia de aprendizaje, pero debe implementarse cuidadosamente.'),
(60, 'lc', 60, '¿Qué afirma el artículo sobre la importancia de la lectura?', 'Leer mejora el vocabulario y la capacidad de concentración.'),
(61, 'lc', 61, '¿Qué describe el informe sobre el cambio climático?', 'La actividad humana está acelerando el proceso, afectando el clima global de manera irreversible.'),
(62, 'ma', 62, '¿Cuál es el valor de x en la ecuación 2x - 3 = 7?', '5'),
(63, 'ma', 63, '¿Cuál es el área de un círculo con radio de 6 cm?', '36 cm²'),
(64, 'ma', 64, '¿Cuál es la suma de las fracciones 3/4 y 5/8?', '7/8'),
(65, 'ma', 64, '¿Cuál es el precio final de un artículo que costaba 200 dólares y tiene un descuento del 25%?', '150 dólares'),
(66, 'ma', 65, '¿Cuál es la mediana de las edades 4, 7, 9, 12, 15?', '9'),
(67, 'ma', 66, '¿Cuál es el valor de x en la ecuación 3x + 4 = 16?', '4'),
(68, 'ma', 67, '¿Cuál es el área de un triángulo con base de 10 cm y altura de 5 cm?', '25 cm²'),
(69, 'ma', 68, '¿Cuál es el valor del séptimo término de la secuencia 2, 5, 8, 11, ...?', '20'),
(70, 'ma', 69, '¿Cuál es el área restante de un rectángulo de 10 cm por 6 cm con un círculo de radio 3 cm inscrito?', '40 cm²'),
(71, 'ma', 70, '¿Cuál es el valor de x en la ecuación 4x - 7 = 9?', '4'),
(72, 'ma', 71, '¿Cuál es el valor de y cuando x = 5 en la ecuación y = 3x + 2?', '17'),
(73, 'ma', 72, '¿Cuál es la raíz cuadrada de 81?', '9'),
(74, 'ma', 73, '¿Cuál es el volumen de un prisma rectangular de 4 cm, 5 cm y 6 cm?', '120 cm³'),
(75, 'ma', 74, '¿Cuáles son las soluciones del sistema de ecuaciones 2x + y = 6, x - y = 2?', 'x = 3, y = 1'),
(76, 'ma', 75, 'En un triángulo rectángulo, si el cateto opuesto al ángulo de 30° mide 3 cm, ¿cuál es la longitud de la hipotenusa?', '6 cm'),
(77, 'ma', 76, '¿Cuáles son las raíces de la ecuación x² - 5x + 6 = 0?', 'x = 2, x = 3'),
(78, 'ma', 77, 'Si el precio original de un artículo era 2000 pesos y aumenta un 15%, ¿cuál es el nuevo precio?', '2300'),
(79, 'ma', 78, '¿Cuál es el valor de x en la ecuación 5(x - 2) = 20?', '6'),
(80, 'ma', 79, '¿Cuál es la probabilidad de que se extraiga una bola verde de una bolsa con 3 bolas rojas, 4 bolas verdes y 5 bolas azules?', '4/12'),
(81, 'ma', 80, 'Si el ángulo θ es tal que cos θ = 1/2, ¿cuál es el valor de θ?', '60°'),
(82, 'sc', 82, '¿En qué año comenzó la Revolución Francesa?', '1789'),
(83, 'sc', 83, '¿Cuándo terminó la Edad Media?', 'A finales del siglo XV'),
(84, 'sc', 84, '¿En qué año Cristóbal Colón llegó a América?', '1492'),
(85, 'sc', 85, '¿Cuándo cayó el Imperio Romano de Occidente?', '476 d.C.'),
(86, 'sc', 86, '¿Qué dos países fueron los principales protagonistas de la Guerra Fría?', 'Estados Unidos y la Unión Soviética'),
(87, 'sc', 87, '¿Dónde comenzó la Revolución Industrial?', 'En Gran Bretaña'),
(88, 'sc', 88, '¿Qué países independizó Simón Bolívar?', 'Venezuela, Colombia, Ecuador, Perú y Bolivia'),
(89, 'sc', 89, '¿Quién fue el líder que inició la independencia de México?', 'Miguel Hidalgo'),
(90, 'sc', 90, '¿Quién fue el líder de la Revolución Rusa?', 'Lenin'),
(91, 'sc', 91, '¿Qué clase social ocupaba la cima del sistema feudal?', 'Los monarcas o reyes'),
(92, 'sc', 92, '¿En qué ciudad-estado griega nació la democracia?', 'Atenas'),
(93, 'sc', 93, '¿Cuándo comenzó la Primera Guerra Mundial?', '1914'),
(94, 'sc', 94, '¿En qué año se firmó el Tratado de Versalles?', '1919'),
(95, 'sc', 95, '¿Quién fue el dictador que gobernó México antes de la Revolución Mexicana?', 'Porfirio Díaz'),
(96, 'sc', 96, '¿En qué siglos tuvo lugar el Renacimiento?', 'Entre los siglos XIV y XVI'),
(97, 'sc', 97, '¿Qué evento simbólico ocurrió en 1989, marcando el fin de la división de Alemania?', 'La caída del Muro de Berlín'),
(98, 'sc', 98, '¿En qué siglos tuvo lugar la Edad de los Descubrimientos?', 'En los siglos XV y XVI'),
(99, 'sc', 99, '¿Quién fue el líder más conocido de la lucha por los derechos civiles en Estados Unidos?', 'Martin Luther King Jr.'),
(100, 'sc', 100, '¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?', '1945');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta_usuario`
--

CREATE TABLE `respuesta_usuario` (
  `id_respuesta` int(11) NOT NULL,
  `intento_id` int(11) DEFAULT NULL,
  `pregunta_id` int(11) DEFAULT NULL,
  `opcion_seleccionada` varchar(255) DEFAULT NULL,
  `puntos_obtenidos` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contraseña` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `email`, `contraseña`) VALUES
(9, 'hector', 'hrdc.1407@hotmail.com', '$2y$10$8ksypzNFwa885NO3xykQluakXM8.IAOXy1qwOg1nFHvqPZ3zD7N5i');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `enunciado`
--
ALTER TABLE `enunciado`
  ADD PRIMARY KEY (`id_enunciado`);

--
-- Indices de la tabla `intento`
--
ALTER TABLE `intento`
  ADD PRIMARY KEY (`id_intento`) USING BTREE,
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id_materia`);

--
-- Indices de la tabla `opcion`
--
ALTER TABLE `opcion`
  ADD KEY `id_pregunta` (`pregunta_id`) USING BTREE;

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`id_pregunta`),
  ADD KEY `materia_id` (`materia_id`),
  ADD KEY `id_enunciado` (`enunciado_id`) USING BTREE;

--
-- Indices de la tabla `respuesta_usuario`
--
ALTER TABLE `respuesta_usuario`
  ADD PRIMARY KEY (`id_respuesta`),
  ADD KEY `intento_id` (`intento_id`),
  ADD KEY `pregunta_id` (`pregunta_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`) USING BTREE,
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `intento`
--
ALTER TABLE `intento`
  MODIFY `id_intento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `respuesta_usuario`
--
ALTER TABLE `respuesta_usuario`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `intento`
--
ALTER TABLE `intento`
  ADD CONSTRAINT `intento_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `opcion`
--
ALTER TABLE `opcion`
  ADD CONSTRAINT `opcion_ibfk_1` FOREIGN KEY (`pregunta_id`) REFERENCES `pregunta` (`id_pregunta`);

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id_materia`),
  ADD CONSTRAINT `pregunta_ibfk_2` FOREIGN KEY (`enunciado_id`) REFERENCES `enunciado` (`id_enunciado`);

--
-- Filtros para la tabla `respuesta_usuario`
--
ALTER TABLE `respuesta_usuario`
  ADD CONSTRAINT `respuesta_usuario_ibfk_1` FOREIGN KEY (`intento_id`) REFERENCES `intento` (`id_intento`),
  ADD CONSTRAINT `respuesta_usuario_ibfk_2` FOREIGN KEY (`pregunta_id`) REFERENCES `pregunta` (`id_pregunta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
