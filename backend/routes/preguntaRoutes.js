import express from 'express';
import { obtenerPreguntaAleatoriaId, obtenerDetallePreguntaPorId, obtenerNombreMateriaPorId, obtenerOpcionesPorPreguntaId, obtenerEnunciadoPorId, obtenerEsCorrectaPorId } from '../controllers/preguntaController.js';
const router = express.Router();

// Ruta para contar preguntas y obtener el nombre de la materia

router.get('/pregunta/aleatoria', obtenerPreguntaAleatoriaId);
router.get('/pregunta/aleatoria-materia/:id', obtenerNombreMateriaPorId);
router.get('/pregunta/enunciado/:id', obtenerEnunciadoPorId)
router.get('/pregunta/detalle/:id', obtenerDetallePreguntaPorId)
router.get('/pregunta/opciones/:id', obtenerOpcionesPorPreguntaId);
router.get('/pregunta/escorrecta/:id', obtenerEsCorrectaPorId)
// Ruta para obtener preguntas con el nombre de la materia

export default router;