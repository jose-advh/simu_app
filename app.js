import express from "express";
import preguntas from "./backend/controllers/preguntas.js";

const app = express();

app.get('/preguntas', preguntas); 

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
