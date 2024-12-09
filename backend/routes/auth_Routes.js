import express from 'express';
import authController from '../controllers/auth_Controller.js';

const router = express.Router();

router.post('/registro', authController.register);

router.post('/login', authController.login);

export default router;