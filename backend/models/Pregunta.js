import Database from '../config/db.js'; // Importar la configuración de la base de datos

class Pregunta {
  constructor() {
    this.db = new Database(); // Crear una nueva instancia de Database
  }

  // Método para obtener una pregunta aleatoria
  async obtenerPreguntaAleatoria() {
    try {
      await this.db.connect();
      const sql = `
        SELECT 
          p.id_pregunta AS pregunta_id
        FROM 
          pregunta p
        ORDER BY RAND()
        LIMIT 1;  
      `;
      const rows = await this.db.query(sql);
      return rows[0] || null; // Retorna la pregunta aleatoria o null si no existe
    } catch (error) {
      console.error('Error al obtener pregunta aleatoria: en modelo', error);
      throw new Error('Error al obtener pregunta aleatoria en modelo');
    } finally {
      await this.db.close(); // Asegúrate de cerrar la conexión
    }
  }

  // Método para obtener el nombre de la materia por ID de pregunta
  async obtenerNombreMateria(id) {
    try {
      await this.db.connect();
      const sql = `
        SELECT 
          m.nombre AS nombre_materia
        FROM 
          pregunta p
        INNER JOIN 
          materia m ON p.materia_id = m.id_materia
        WHERE 
          p.id_pregunta = ?;
      `;
      const rows = await this.db.query(sql, [id]);
      return rows[0] ? rows[0].nombre_materia : null; // Retorna el nombre de la materia o null si no existe
    } catch (error) {
      console.error('Error al obtener nombre de la materia:', error);
      throw new Error('Error al obtener nombre de la materia');
    } finally {
      await this.db.close(); // Asegúrate de cerrar la conexión
    }
  }

  // Método para obtener las opciones por ID de pregunta
  async obtenerOpcionesPorPreguntaId(id) {
    try {
      await this.db.connect();
      const sql = `
        SELECT 
          o.id_opcion AS opcion_id,
          o.opcion AS opcion_texto
        FROM 
          opciones o
        WHERE 
          o.pregunta_id = ?;
      `;
      const rows = await this.db.query(sql, [id]);
      return rows; // Retorna un array de opciones
    } catch (error) {
      console.error('Error al obtener opciones por ID de pregunta:', error);
      throw new Error('Error al obtener opciones por ID de pregunta');
    } finally {
      await this.db.close(); // Asegúrate de cerrar la conexión
    }
  }
}

export default Pregunta;