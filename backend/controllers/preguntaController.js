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

export const obtenerNombreMateriaPorId = async (req, res) => {
  const { id } = req.params; // Obtener el ID de la pregunta de los parámetros de la solicitud
  try {
    const pregunta = new Pregunta(); // Crear una instancia de Pregunta
    const nombreMateria = await pregunta.obtenerNombreMateria(id); // Llamar al método de instancia
    if (!nombreMateria) {
      return res.status(404).json({ error: 'No se encontró la materia para la pregunta especificada' });
    }
    res.json({ nombreMateria }); // Enviar el nombre de la materia como respuesta
  } catch (error) {
    console.error('Error en el controlador:', error);
    res.status(500).json({ error: 'Error al obtener el nombre de la materia en controlador' });
  }
};

export const obtenerEnunciadoPorId = async (req, res) => {
  const { id } = req.params; // Obtener el ID de la pregunta desde la URL
  try {
    const pregunta = new Pregunta(); // Crear una instancia de Pregunta
    const enunciado = await pregunta.obtenerEnunciadoPorId(id); // Ll
    
    if (!enunciado || enunciado.length === 0) {
      return res.status(404).json({ error: 'No se encontró el enunciado' });
    }
    res.json({ enunciado }); // Enviar el enunciado como respuesta
    } catch (error) {
      console.error('Error al traer el enunciado :', error);
      res.status(500).json({ error: 'Error al obtener el enunciado' });
    }
};

export const obtenerDetallePreguntaPorId = async (req, res) => {
  const { id } = req.params; // Obtener el ID de la pregunta desde la URL
  try {
    const pregunta = new Pregunta(); // Crear una instancia de Pregunta
    const detallePregunta = await pregunta.obtenerDetallePreguntaPorId(id); // Ll
    if (!detallePregunta || detallePregunta.length === 0) {
      return res.status(404).json({ error: 'No se encontró el detalle de la pregunta' });
    }
    res.json({ detallePregunta }); // Enviar el detalle de la pregunta como respuesta
  } catch (error) {
    console.error('Error en el controlador:', error);
    res.status(500).json({ error: 'Error al obtener el detalle de la pregunta' });
  }    
};

export const obtenerOpcionesPorPreguntaId = async (req, res) => {
  const { id } = req.params; // Obtener el ID de la pregunta de los parámetros de la solicitud
  try {
    const pregunta = new Pregunta(); // Crear una instancia de Pregunta
    const opciones = await pregunta.obtenerOpcionesPorPreguntaId(id); // Llamar al método de instancia
    if (!opciones || opciones.length === 0) {
      return res.status(404).json({ error: 'No se encontraron opciones para la pregunta especificada' });
    }
    res.json({ opciones }); // Enviar las opciones como respuesta
  } catch (error) {
    console.error('Error en el controlador:', error);
    res.status(500).json({ error: 'Error al obtener las opciones por ID de pregunta en controlador' });
  }
};

export const obtenerEsCorrectaPorId = async (req, res) => {
  const { id } = req.params; // Obtener el ID de la pregunta de los par
  try {
    const pregunta = new Pregunta(); // Crear una instancia de Pregunta
    const esCorrecta = await pregunta.obtenerEsCorrectaPorId(id); // Ll
    if (!esCorrecta) {
      return res.status(404).json({ error: 'No se encontró la respuesta correcta'})
    }
    res.json({ esCorrecta }); // Enviar la respuesta correcta como respuesta
    } catch (error) {
      console.error('Error en el controlador:', error);
      res.status(500).json({ error: 'Error al obtener la respuesta correcta en control'});
    } 
  }