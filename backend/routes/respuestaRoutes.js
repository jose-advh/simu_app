import express from 'express';
import respuestaController from '../controllers/respuestaController.js';

const router = express.Router();

router.post ('/respuesta/usuario', respuestaController.getRespuesta);
router.get('/respuesta/:id', respuestaController.obtenerRespuestaPorId);
router.get('/respuesta/intento/:idIntento', respuestaController.obtenerRespuestasPorIntento);

export default router;