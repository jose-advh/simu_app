import express from 'express';
import { obtenerPreguntaAleatoriaId, obtenerNombreMateriaPorId } from '../controllers/preguntaController.js';
const router = express.Router();

// Ruta para contar preguntas y obtener el nombre de la materia

router.get('/pregunta/aleatoria', obtenerPreguntaAleatoriaId);
router.get('/pregunta/aleatoria-materia/:id', obtenerNombreMateriaPorId);
// Ruta para obtener preguntas con el nombre de la materia

export default router;