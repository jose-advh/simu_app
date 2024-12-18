import Database from '../config/db.js'; // Importar la configuración de la base de datos

class Pregunta {
  constructor() {
    this.db = new Database(); // Crear una nueva instancia de Database
  }

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

  // c:\Users\h\Documents\INCA-TECN-SYSTEM\Aplicaciones-moviles\proyectos\proyecto-final\simu_app\backend\models\Pregunta.js

async obtenerPreguntaPorId(id) {
  try {
    await this.db.connect();
    const sql = `
      SELECT 
        p.id_pregunta AS pregunta_id,
        p.pregunta AS pregunta,
        p.materia_id AS materia_id
      FROM 
        pregunta p
      WHERE 
        p.id_pregunta = ?;
    `;
    const rows = await this.db.query(sql, [id]);
    return rows[0] || null; // Retorna la pregunta o null si no existe
  } catch (error) {
    console.error('Error al obtener pregunta por ID:', error);
    throw new Error('Error al obtener pregunta por ID en modelo');
  } finally {
    await this.db.close(); // Asegúrate de cerrar la conexión
  }
}

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

  async obtenerEnunciadoPorId(id) {
    try {
      await this.db.connect();
      const sql = `
      SELECT
      e.descripcion AS enunciado_descripcion
      FROM
      pregunta p
      INNER JOIN
      enunciado e ON p.enunciado_id = e.id_enunciado
      WHERE
      p.id_pregunta = ?;
      `;
      const rows = await this.db.query(sql, [id]);
      
      return rows[0] ? rows[0].enunciado_descripcion : null; // Retorna el
    } catch (error) {
      console.error("Error al obtener el enunciado", error);
      throw new Error("Error al obtener el enunciado");
    } finally {
      await this.db.close();
    }
  }

  async obtenerDetallePreguntaPorId(id) {
    try {
      await this.db.connect();
      const sql = `
      SELECT
      p.pregunta AS pregunta_detalle
      FROM
      pregunta p
      WHERE
      p.id_pregunta = ?;
    `;
    const rows = await this.db.query(sql, [id]);
    return rows[0] ? rows[0].pregunta_detalle : null;
  } catch (error) {
    console.error("Error al obtener el detalle de la pregunta", error);
    throw new Error("Error al obtener el detalle de la pregunta");
  } finally {
    await this.db.close();
  }
}

  async obtenerOpcionesPorPreguntaId(id) {
    try {
      await this.db.connect();
      const sql = `
        SELECT 
          o.texto AS opcion_texto
        FROM 
          opcion o
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

  async obtenerEsCorrectaPorId(id) {
    try {
      await this.db.connect();
      const sql = `
      SELECT
      p.es_correcta AS es_correcta
      FROM
      pregunta p
      WHERE
      p.id_pregunta = ?;
    `;
    const rows = await this.db.query(sql, [id]);
    return rows[0] ? rows[0].es_correcta : null; // Retorna la
    } catch (error) {
      console.error("Error al obtener la respuesta correcta", error);
      throw new Error("Error al obtener la respuesta correcta");
    } finally {
      await this.db.close();
    }
  }

}


export default Pregunta;