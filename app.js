import express from "express";
import preguntas from "./backend/controllers/preguntas.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from './backend/routes/auth_Routes.js'

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded(
  { extended: true}
));
app.use('simu/auth', authRoutes);

const PORT = process.env.PORT || 3005;
app.listen(3005, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
