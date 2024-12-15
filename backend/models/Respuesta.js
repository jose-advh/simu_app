import Database from '../config/db.js';

class Respuesta {
  constructor() {
    this.db = new Database();
  }

  async enviarRespuesta(id, intento, pregunta, opcion_seleccionada, puntos) {
    try {
      const sql = `INSERT INTO respuestas_usuario (id, intento, pregunta, opcion_seleccionada, puntos ) VALUES (?, ?, ?, ?, ?)`;
      const db = new Database();
      await db.connect();
      await db.query(sql, [id, intento, pregunta, opcion_seleccionada, puntos]);
      await db.close();
    } catch (error) {
      console.error('Error al crear la respuesta', error);
      throw error;
    }
  }

  async obtenerRespuestaPorId(id) {
    try {
      const db = new Database();
      const sql = `SELECT * FROM respuestas_usuario WHERE id = ?`;
      const respuesta = await db.query(sql, [id]);
      await db.close();
      return respuesta[0] || null;
    } catch (error) {
      console.error('Error al obtener la respuesta', error);
      throw error;
    }
  }
}

export default Respuesta;