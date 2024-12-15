
import express from 'express';
import intentoController from '../controllers/intentoController.js';

const router = express.Router();

router.post('/intento', intentoController.crearIntento);
router.get('/intentos/:usuario_id', intentoController.obtenerIntentos);
router.get('/intento/:id', intentoController.obtenerIntentoPorId);

export default router;