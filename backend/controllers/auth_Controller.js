import Usuario from '../models/Usuario.js';
import jwt from 'jsonwebtoken';
import { registroSchema, loginSchema } from '../schemas/auth_Schemas.js';

const authController = {
  async register(req, res) {
    try {
      const { nombre, correo, contrasena } = registroSchema(req.body);
      const usuario = new Usuario();

      const usuarioExistente = await Usuario.obtenerPorCorreo(correo);
      if (usuarioExistente) {
        return res.status(400).json({ mensaje: 'El correo ya está en uso' });
      }

      await usuario.crear(nombre, correo, contrasena);
      res.status(201).json({ message: 'Usuario creado con éxito' });
    } catch (error) {
      if (error.errors) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: 'Error al crear el usuario' });
      }
    }
  },

  async login(req, res) {
    try {
      const { correo, contrasena } = loginSchema.parse(req.body);
      const usuario = new Usuario();

      const usuarioExistente = await usuario.obtenerPorCorreo(correo);
      if (!usuarioExistente) {
        return res.status(400).json({ mensaje: 'El correo no existe' });
      }

      const esValido = await usuario.comprobarContrasena(
        contrasena,
         usuarioExistente.contrasena
      );
      if (!esValido) {
          return res.status(400).json({ mensaje: 'La contraseña es incorrecta' });
      }

      const token = jwt.sign(
        { id: usuarioExistente.id },
        process.env.SECRETA,
        { expiresIn: '2h' }
      );

      res.json({ token, message: 'Inició sesión con éxito' });
    } catch (error) {
      if (error.errors) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: 'Error al iniciar sesión' });
      }
    }
  },
};

export default authController;
