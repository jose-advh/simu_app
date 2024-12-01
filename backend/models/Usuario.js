import db from '../config/db.js';
import bcrypt from 'bcrypt';

class Usuario {

  constructor () {
    this.db = new Database ();
  }
  //Metodo estatico para llamar a la clase
  //crear un nuevo usuario
  static async crear(nombre, correo , contrasena) {
    try {
      //hasheamos la contraseña con el metodo hash
      const hashPassword = await bcrypt.hash(contrasena, 10);
      //creamos la consulta de crear el usuario
      const sql = 'INSERT INTO (nombre, correo, contrasena) VALUES (?, ?, ?)';
      await this.db.connect();
      await this.db.query(sql, [nombre, correo, hashPassword]);
      await this.db.close();
    } catch (error) {
      console.error('Error al crear el usuario', error);
      throw error;
    }
  }

  //obtener usuario por correo 
  // metodo estatico para llamar a la clase
  static async obtenerPorCorreo(correo) {
    //try para capturar errores
    try {
      const sql = 'SELECT * FROM usuarios WHERE correo = ?';
      await this.db.connect();
      const row = await this.db.query(sql, [correo]);
      await this.db.close();
      return row[0] || null;
    } catch (error) {
        console.error('Error al obtener el usuario', error);
        throw error;
    }
  }

  //validar la contraseña con bcrypt y el metodo compare
  async validarContrasena(hash, contrasena) {
    return bcrypt.compare(contrasena, hash);
  }
}

export default Usuario;