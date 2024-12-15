import Database from '../config/db.js';

class Respuesta {
  constructor() {
    this.db = new Database(); // Crear una sola instancia
  }

  async enviarRespuesta(id, intento, pregunta, opcion_seleccionada, puntos) {
    let connection;
    try {
      connection = await this.db.connect(); // Conectar a la base de datos
      const sql = `
        INSERT INTO respuesta_usuario 
        (id_respuesta, intento_id, pregunta_id, opcion_seleccionada, puntos_obtenidos) 
        VALUES (?, ?, ?, ?, ?)
      `;
      await connection.query(sql, [id, intento, pregunta, opcion_seleccionada, puntos]);
    } catch (error) {
      console.error('Error al crear la respuesta:', error.message);
      throw error; // Re-lanzar el error para manejarlo fuera del método
    } finally {
      if (connection) {
        await connection.close(); // Asegúrate de cerrar la conexión
      }
    }
  }

  async obtenerRespuestaPorId(id) {
    let connection;
    try {
      connection = await this.db.connect();
      const sql = `SELECT * FROM respuesta_usuario WHERE id_respuesta = ?`;
      const [rows] = await connection.query(sql, [id]); // Asegúrate de extraer el primer elemento
      if (rows.length > 0) {
        console.log('Respuesta encontrada:', rows[0]); // Para depuración
        return rows[0];
      } else {
        console.log('No se encontró respuesta con ID:', id); // Registro si no hay resultados
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