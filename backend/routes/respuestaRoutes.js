import express from 'express';
import respuestaController from '../controllers/respuestaController.js';

const router = express.Router();

router.post ('/respuesta/usuario', respuestaController.getRespuesta);

export default router;