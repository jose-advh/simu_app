
import express from 'express';
import intentoController from '../controllers/intentoController.js';

const router = express.Router();

router.post('/intento', intentoController.crearIntento);
router.get('/intento/:usuario_id', intentoController.obtenerIntentos);

export default router;