import express from 'express';
import { obtenerPreguntaAleatoriaId, obtenerNombreMateriaPorId, obtenerOpcionesPorPreguntaId, obtenerRespuestaCorrectaPorPreguntaId } from '../controllers/preguntaController.js';
const router = express.Router();

// Ruta para contar preguntas y obtener el nombre de la materia

router.get('/pregunta/aleatoria', obtenerPreguntaAleatoriaId);
router.get('/pregunta/opciones/:id', obtenerOpcionesPorPreguntaId);
router.get('/pregunta/aleatoria-materia/:id', obtenerNombreMateriaPorId);
router.get('/pregunta/respuesta-correcta/:id', obtenerRespuestaCorrectaPorPreguntaId);
// Ruta para obtener preguntas con el nombre de la materia

export default router;