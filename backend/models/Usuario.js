import Database from '../config/db.js';
import bcrypt from 'bcrypt';

class Usuario {
  constructor() {
    this.db = new Database();
  }

  // Método estático para crear un nuevo usuario
  static async crear(nombre, correo, contrasena) {
    try {
      // Hasheamos la contraseña con el método hash
      const hashPassword = await bcrypt.hash(contrasena, 10);
      // Creamos la consulta de crear el usuario
      const sql = 'INSERT INTO usuario (nombre, email, contraseña) VALUES (?, ?, ?)';
      const db = new Database(); // Crear una nueva instancia de Database
      await db.connect();
      await db.query(sql, [nombre, correo, hashPassword]);
      await db.close();
    } catch (error) {
      console.error('Error al crear el usuario', error);
      throw error;
    }
  }

  // Obtener usuario por correo
  // Método estático para llamar a la clase
  static async obtenerPorCorreo(correo) {
    try {
      const db = new Database(); // Crear una nueva instancia de Database
      const sql = 'SELECT * FROM usuario WHERE email = ?'; 
      await db.connect();
      const row = await db.query(sql, [correo]);
      await db.close();
      return row[0] || null;
    } catch (error) {
      console.error('Error al obtener el usuario', error);
      throw error;
    }
  }

  // Validar la contraseña con bcrypt y el método compare
  async validarContrasena(hash, contrasena) {
    return bcrypt.compare(contrasena, hash);
  }
}

export default Usuario;