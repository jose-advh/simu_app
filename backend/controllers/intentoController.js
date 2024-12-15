
import Intento from '../models/Intento.js';

const intentoController = {
  async crearIntento(req, res) {
    const { usuario_id, fecha_inicio, puntuaciones } = req.body;
    const hora_final = new Date();

    try {
      const intento = new Intento();
      await intento.crearIntento(usuario_id, fecha_inicio, hora_final, puntuaciones.matematicas, puntuaciones.lectura, puntuaciones.naturales, puntuaciones.sociales, puntuaciones.ingles, puntuaciones.general);
      return res.status(201).json({ message: 'Intento creado con éxito' });
    } catch (error) {
      console.error('Error al generar el intento:', error);
      return res.status(500).json({ message: 'Error al crear el intento' });
    }
  },

  async obtenerIntentos(req, res) {
    const { usuario_id } = req.params;
    try {
      const intento = new Intento();
      const intentos = await intento.obtenerIntentosPorUsuarioId(usuario_id);
      if (intentos.length === 0) {
        return res.status(404).json({ message: 'No se encontraron intentos para este usuario' });
      }
      return res.json({ intentos });
    } catch (error) {
      console.error('Error al obtener intentos:', error);
      return res.status(500).json({ message: 'Error al obtener intentos' });
    }
  }
};

export default intentoController;