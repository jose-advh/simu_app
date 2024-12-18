import express from 'express';
import simulacroController from '../controllers/simulacroController.js';

const router = express.Router();

router.get('/simulacro/generar/:id', simulacroController.generarSimulacro);
router.post('/simulacro/enviar-respuestas', simulacroController.enviarRespuestas);
router.get('/simulacro/enviar-resultados/:usuario_id', simulacroController.enviarResultados);

export default router;
