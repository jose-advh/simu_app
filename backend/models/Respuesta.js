import Database from '../config/db.js';

class Respuesta {
  constructor() {
    this.db = new Database(); 
  }

  async enviarRespuesta(id, intento, pregunta, opcion_seleccionada, puntos) {
    let connection;
    try {
      connection = await this.db.connect(); 
      const sql = `
        INSERT INTO respuesta_usuario 
        (id_respuesta, intento_id, pregunta_id, opcion_seleccionada, puntos_obtenidos) 
        VALUES (?, ?, ?, ?, ?)
      `;
      await connection.query(sql, [id, intento, pregunta, opcion_seleccionada, puntos]);
    } catch (error) {
      console.error('Error al crear la respuesta:', error.message);
      throw error; 
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }

  async obtenerRespuestaPorId(id) {
    let connection;
    try {
      connection = await this.db.connect();
      const sql = `SELECT * FROM respuesta_usuario WHERE id_respuesta = ?`;
      const [rows] = await connection.query(sql, [id]); 
      if (rows.length > 0) {
        console.log('Respuesta encontrada:', rows[0]); 
        return rows[0];
      } else {
        console.log('No se encontró respuesta con ID:', id); 
        return null;
      }
    } catch (error) {
      console.error('Error al obtener la respuesta:', error.message);
      throw error;
    } finally {
      if (connection) {
        await connection.close();
      }
    }
  }
  
  async obtenerRespuestaPorIntento(idIntento) {
    let connection;
    try {
      connection = await this.db.connect(); 
      const sql = `SELECT * FROM respuesta_usuario WHERE intento_id = ?`;
      const [rows] = await connection.query(sql, [idIntento]); 
      if (rows.length > 0) {
        return rows;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al obtener la respuesta:', error.message);
      throw error; 
    } finally {
      if (connection) {
        await connection.close();
      }
    }
}
}

export default Respuesta;