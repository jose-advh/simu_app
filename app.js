import Database  from "./backend/config/cls_db.js";


const db = new Database();

 function main() {
  try {
    db.connect().then (()=>{
      db.query(`SELECT id_pregunta, pregunta FROM pregunta WHERE materia_id = "lc" LIMIT 2`).then((result) => {
        console.log(result);
      }).finally(()=>{
        db.close().then(()=>{
          console.log('Database connection closed');
        }).catch((error)=>{
          console.error("Database not closed", error);          
        })
      })
    })
  } catch(error) {
    console.error(error);
  }
}
main();