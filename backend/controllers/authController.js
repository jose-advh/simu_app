import Usuario from '../models/Usuario.js';
import jwt from 'jsonwebtoken';
import { registroSchema, loginSchema } from '../schemas/authSchemas.js';

const authController = {
  async register(req, res) {
    try {
      const { nombre, correo, contrasena } = registroSchema.parse(req.body);
      const usuario = new Usuario();

      const usuarioExistente = await Usuario.obtenerPorCorreo(correo);
      if (usuarioExistente) {
        return res.status(400).json({ mensaje: 'El correo ya está en uso' });
      }

      await Usuario.crear(nombre, correo, contrasena);
      res.status(201).json({ message: 'Usuario creado con éxito' });
    } catch (error) {
      if (error.errors) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: 'Error al crear el usuario' });
        console.error(error);
      }
    }
  },

  async login(req, res) {
    try {
      const { correo, contrasena } = loginSchema.parse(req.body);
      const usuario = new Usuario();

      const usuarioExistente = await Usuario.obtenerPorCorreo(correo);

      if (!usuarioExistente) {
        return res.status(400).json({ mensaje: 'El correo no existe' });
      }

      const esValido = await usuario.validarContrasena(usuarioExistente.contraseña, contrasena);
      if (!esValido) {
          return res.status(400).json({ mensaje: 'La contraseña es incorrecta' });
      }

      const token = jwt.sign(
        { 
          id: usuarioExistente.id_usuario,
          nombre: usuarioExistente.nombre
         },
        process.env.SECRETA,
        { expiresIn: '2h' }
      );

      res.json({ token, message: 'Inició sesión con éxito' });
    } catch (error) {
      if (error.errors) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: 'Error al iniciar sesión' });
        console.error(error);
      }
    }
  },

  validarToken(req, res) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ mensaje: 'No se proporcionó token' });
    }

    jwt.verify(token, process.env.SECRETA, (err) => {
      if (err) {
        return res.status(403).json({ mensaje: 'Token expirado o inválido'})
      }
      res.status(200).json({ messaje: 'Token válido' });
    }); 
  }
};

export default authController;
