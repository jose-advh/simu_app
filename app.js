import Database  from "./backend/config/cls_db.js";


const db = new Database();

 function main() {
  try {
    db.connect().then (()=>{
      db.query(`SELECT * FROM usuario`).then((result) => {
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