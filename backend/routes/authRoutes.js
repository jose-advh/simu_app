import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.get( '/' , async (req, res) => {
  return res.status(200).json({ message: 'Hello World' });
});

router.post('/auth/registro', authController.register);

router.post('/auth/login', authController.login);

export default router;