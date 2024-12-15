
import Database from '../config/db.js';

class Intento {
  constructor() {
    this.db = new Database();
  }

  async crearIntento(usuarioId, fechaInicio, horaFinal, puntuacionMatematicas, puntuacionLectura, puntuacionNaturales, puntuacionSociales, puntuacionIngles, puntuacionGeneral) {
    try {
      const sql = `INSERT INTO intentos (usuario_id, fecha_inicio, hora_final, puntuacion_Matematicas, puntuacion_Lectura, puntuacion_Naturales, puntuacion_Sociales, puntuacion_Ingles, puntuacion_General) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      await this.db.connect();
      await this.db.query(sql, [usuarioId, fechaInicio, horaFinal, puntuacionMatematicas, puntuacionLectura, puntuacionNaturales, puntuacionSociales, puntuacionIngles, puntuacionGeneral]);
      await this.db.close();
    } catch (error) {
      console.error('Error al crear el intento', error);
      throw error;
    }
  }
  //

  async obtenerIntentosPorUsuarioId(usuarioId) {
    try {
      const sql = `SELECT * FROM intentos WHERE usuario_id = ? ORDER BY fecha_inicio DESC`;
      await this.db.connect();
      const intentos = await this.db.query(sql, [usuarioId]);
      await this.db.close();
      return intentos;
    } catch (error) {
      console.error('Error al obtener intentos', error);
      throw error;
    }
  }
}

export default Intento;