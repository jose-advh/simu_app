import express from 'express';
import { obtenerPreguntaAleatoriaId, obtenerPreguntaPorId, obtenerDetallePreguntaPorId, obtenerNombreMateriaPorId, obtenerOpcionesPorPreguntaId, obtenerEnunciadoPorId, obtenerEsCorrectaPorId } from '../controllers/preguntaController.js';
const router = express.Router();


router.get('/pregunta/aleatoria', obtenerPreguntaAleatoriaId);
router.get('/pregunta/:id', obtenerPreguntaPorId);
router.get('/pregunta/aleatoria-materia/:id', obtenerNombreMateriaPorId);
router.get('/pregunta/enunciado/:id', obtenerEnunciadoPorId)
router.get('/pregunta/detalle/:id', obtenerDetallePreguntaPorId)
router.get('/pregunta/opciones/:id', obtenerOpcionesPorPreguntaId);
router.get('/pregunta/escorrecta/:id', obtenerEsCorrectaPorId)

export default router;