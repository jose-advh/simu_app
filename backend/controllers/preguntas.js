import Database from "../config/cls_db.js";

const db = new Database();

const preguntas = async (req, res) => {
  try {
    db.connect().then (()=>{

      db.query(`SELECT e.descripcion AS enunciado, p.pregunta, p.es_correcta AS opcionCorrecta,  GROUP_CONCAT(op.texto ORDER BY op.pregunta_id) AS opciones FROM pregunta p INNER JOIN enunciado e ON e.id_enunciado = p.enunciado_id INNER JOIN opcion op ON p.id_pregunta = op.pregunta_id WHERE p.materia_id = "lc" GROUP BY p.id_pregunta;`).then((result) => {
        res.json(result);

      }).finally(()=>{
        db.close().then(()=>{
          console.log('Database connection closed');
        }).catch((error)=>{
          console.error("Database not closed", error);          
        });
      });
    });
  } catch(error) {
    console.error(error);
  }
}
  
export default preguntas;