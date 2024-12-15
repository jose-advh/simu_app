import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from './backend/routes/authRoutes.js'
import preguntaRoutes from './backend/routes/preguntaRoutes.js'

dotenv.config();

const app = express();
dotenv.config();



app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/simu', authRoutes);
app.use('/simu/api', preguntaRoutes);

const PORT = process.env.PORT || 3005;
app.listen(3005, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
