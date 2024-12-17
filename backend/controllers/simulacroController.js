import axios from 'axios';

const API_BASE_URL = 'http://localhost:3005/simu/api';

const simulacroController = {
  async generarSimulacro(req, res) {
    try {
      const preguntasSeleccionadas = [];
      const materiasContadas = {};
      const totalPreguntas = 10;

      while (preguntasSeleccionadas.length < totalPreguntas) {
        const response = await axios.get(`${API_BASE_URL}/pregunta/aleatoria`);
        
        const preguntaId = response.data.preguntaId.pregunta_id;
        

        if(!preguntaId) return res.status(404).send({ message: 'No hay preguntas disponibles' });

        const [nombreMateriaResponse, enunciadoResponse, detallePreguntaResponse, opcionesResponse, esCorrectaResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/pregunta/aleatoria-materia/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/enunciado/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/detalle/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/opciones/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/escorrecta/${preguntaId}`)
        ]);

        const nombreMateria = nombreMateriaResponse.data.nombreMateria;
        const esCorrecta = esCorrectaResponse.data.esCorrecta;

        if (!materiasContadas[nombreMateria]) {
          materiasContadas[nombreMateria] = 0;
        }

        if (materiasContadas[nombreMateria] < 2) {
          preguntasSeleccionadas.push({
            id: preguntaId,
            nombreMateria: nombreMateria,
            enunciado: enunciadoResponse.data.enunciado,
            detallePregunta: detallePreguntaResponse.data.detallePregunta,
            opciones: opcionesResponse.data.opciones,
          });
          materiasContadas[nombreMateria]++;
        }
      }

     res.status(200).json(preguntasSeleccionadas);

    } catch (error) {
      console.error('Error al generar el simulacro general', error);
      res.status(500).send({ message: 'Error al generar el simulacro general' });
    }
  },

    async enviarRespuestas(req, res) {
    try {
      const { usuarioId, intentoId, respuestas } = req.body; // respuestas es un array de objetos con { preguntaId, respuesta }
      
      // Aquí deberías obtener las preguntas del intento
      const preguntasResponse = await axios.get(`${API_BASE_URL}/intento/${intentoId}/preguntas`);
      const preguntas = preguntasResponse.data;

      let puntuacion = 0;

      // Comparar respuestas
      respuestas.forEach(respuesta => {
        const pregunta = preguntas.find(p => p.id === respuesta.preguntaId);
        if (pregunta && pregunta.opciones.some(opcion => opcion.id === respuesta.respuesta && opcion.esCorrecta)) {
          puntuacion += 10; // Incrementar la puntuación en 10 por cada respuesta correcta
        }
      });

      // Actualizar el intento con la puntuación
      await axios.put(`${API_BASE_URL}/intento/${intentoId}`, {
        puntuacionGeneral: puntuacion,
        horaFinal: new Date() // Establecer la hora final
      });

      res.status(200).json({ puntuacion });
    } catch (error) {
      console.error('Error al enviar respuestas', error);
      res.status (500).send({ message: 'Error al enviar respuestas' });
    }
  },

  async obtenerResultados(req, res) {
    try {
      const { intentoId } = req.params;

      // Obtener el intento y las preguntas asociadas
      const intentoResponse = await axios.get(`${API_BASE_URL}/intento/${intentoId}`);
      const preguntasResponse = await axios.get(`${API_BASE_URL}/intento/${intentoId}/preguntas`);

      const intento = intentoResponse.data;
      const preguntas = preguntasResponse.data;

      // Calcular resultados
      const resultados = preguntas.map(pregunta => {
        return {
          preguntaId: pregunta.id,
          esCorrecta: pregunta.opciones.some(opcion => opcion.esCorrecta && opcion.id === intento.respuestaUsuario[pregunta.id])
        };
      });

      // Contar respuestas correctas
      const puntuacionFinal = resultados.filter(resultado => resultado.esCorrecta).length * 10;

      res.status(200).json({ puntuacionFinal, resultados });
    } catch (error) {
      console.error('Error al obtener resultados', error);
      res.status(500).send({ message: 'Error al obtener resultados' });
    }
  }
};


export default simulacroController;

