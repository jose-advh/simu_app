
import express from 'express';
import intentoController from '../controllers/intentoController.js';
const router = express.Router();

router.get('/intentos', intentoController.obtenerTodosLosIntentos);
router.post('/intento', intentoController.crearIntento);
router.get('/intentos/:usuario_id', intentoController.obtenerIntentosPorUsuario);
router.get('/intento/:id', intentoController.obtenerIntentoPorId);
router.post('/intento/editar/:id', intentoController.editarIntento);
export default router;