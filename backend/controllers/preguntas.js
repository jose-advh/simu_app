import Database from "../config/cls_db.js";

const db = new Database();

const preguntas = async (req, res) => {
  try {
    await db.connect(); 

    const rows = await db.query(`
      SELECT 
        p.id_pregunta, 
        p.materia_id, 
        e.descripcion AS enunciado, 
        p.pregunta, 
        p.es_correcta AS opcionCorrecta, 
        op.texto AS opcion
      FROM 
        pregunta p
      INNER JOIN 
        enunciado e ON e.id_enunciado = p.enunciado_id
      INNER JOIN 
        opcion op ON p.id_pregunta = op.pregunta_id
      WHERE 
        p.materia_id = "lc"
      ORDER BY 
        p.id_pregunta, op.pregunta_id;
    `);

    const preguntas = rows.reduce((acc, row) => {
      const pregunta = acc.find((p) => p.id_pregunta === row.id_pregunta);
      if (pregunta) {
        pregunta.opciones.push(row.opcion); 
      } else {
        acc.push({
          id_pregunta: row.id_pregunta,
          materia_id: row.materia_id,
          enunciado: row.enunciado,
          pregunta: row.pregunta,
          opcionCorrecta: row.opcionCorrecta,
          opciones: [row.opcion], 
        });
      }
      return acc;
    }, []);

    res.json(preguntas); 
  } catch (error) {
    console.error("Error al obtener preguntas:", error);
    res.status(500).json({ error: "Error al obtener preguntas" });
  } finally {
    try {
      await db.close(); 
      console.log("Database connection closed");
    } catch (error) {
      console.error("Database not closed", error);
    }
  }
};

export default preguntas;
