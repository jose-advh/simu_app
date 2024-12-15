import Pregunta from '../models/Pregunta.js'; // Importar el modelo Pregunta

export const obtenerPreguntaAleatoriaId = async (req, res) => {
  try {
    const pregunta = new Pregunta(); // Crear una instancia de Pregunta
    const preguntaId = await pregunta.obtenerPreguntaAleatoria(); // Llamar al método de instancia
    if (!preguntaId) {
      return res.status(404).json({ error: 'No se encontró ninguna pregunta' });
    }
    res.json({ preguntaId }); // Enviar el ID de la pregunta aleatoria como respuesta
  } catch (error) {
    console.error('Error en el controlador:', error);
    res.status(500).json({ error: 'Error al obtener el ID de la pregunta aleatoria en controlador' });
  }
};