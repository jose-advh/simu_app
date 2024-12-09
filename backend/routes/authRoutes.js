import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

router.get( '/' , async (req, res) => {
  return res.status(200).json({ message: 'Hello World' });
});

router.post('/registro', authController.register);

router.post('/login', authController.login);

export default router;