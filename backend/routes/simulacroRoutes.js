import express from 'express';
import simulacroController from '../controllers/simulacroController.js';

const router = express.Router();

router.get('/simulacro/generar', simulacroController.generarSimulacro);
router.post('/simulacro/enviar-respuestas', simulacroController.enviarRespuestas);
router.get('/simulacro/resultados/:intentoId', simulacroController.obtenerResultados);

export default router;
