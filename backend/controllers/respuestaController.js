import Respuesta from '../models/Respuesta.js';
import { respuestaSchema } from '../schemas/respuestaSchemas.js';

const respuestaController = {
  async getRespuesta(req, res) {
    try {
      const { id, intento, pregunta, opcion_seleccionada, puntos } = respuestaSchema.parse(req.body);
      const respuestaInstance = new Respuesta(); 

      const respuestaExistente = await respuestaInstance.obtenerRespuestaPorId(id);
      if (respuestaExistente !== null) {
        return res.status(400).json({ message: 'La respuesta ya existe' });
      }
      await respuestaInstance.enviarRespuesta(id, intento, pregunta, opcion_seleccionada, puntos);
      return res.status(201).json({ message: 'Respuesta creada con éxito' });
    } catch (error) {
      console.error(error); 
      if (error.errors) {
        return res.status(400).json({ message: error.errors[0].message });
      } else {
        return res.status(500).json({ message: 'Error al crear la respuesta' });
      }
    }
  },
};

export default respuestaController;