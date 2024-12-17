import axios from 'axios';
import intentoController from '../controllers/intentoController.js';

const API_BASE_URL = 'http://localhost:3005/simu/api';

const simulacroController = {
  async generarSimulacro(req, res) {
    try {
      const usuario_id = req.params.id;
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

        if (preguntasSeleccionadas.length === totalPreguntas) {
          break;
        }
      }

      const fechaInicio = new Date();

      const intentoReq = {
        body: {
          usuario_id,
          fecha_inicio: fechaInicio,
          puntuaciones: {
            matematicas: null,
            lectura: null,
            naturales: null,
            sociales: null,
            ingles: null,
            general: null,
          },
        }
      };
      const intentoRes = {
        status: (statusCode) => ({
          json: (data) => {
            console.log('intento creado: ', data);
          }
        }),
      };

      await intentoController.crearIntento(intentoReq, intentoRes);


     res.status(200).json(preguntasSeleccionadas);

    } catch (error) {
      console.error('Error al generar el simulacro general', error);
      res.status(500).send({ message: 'Error al generar el simulacro general' });
    }
  },

  async enviarRespuestas(req, res) {
    try {
        const { usuario_id, respuestas } = req.body; // respuestas es un array de objetos con { preguntaId, respuesta }
        
        // Obtener los intentos del usuario
        const intentosResponse = await axios.get(`${API_BASE_URL}/intentos/${usuario_id}`);
        const intentos = intentosResponse.data.intentos;

        if (intentos.length === 0) {
            return res.status(404).send({ message: 'No se encontraron intentos para este usuario' });
        }

        // Tomar el último intento
        const ultimoIntento = intentos[0]; // Suponiendo que los intentos están ordenados por fecha de inicio
        const intentoId = ultimoIntento.id_intento;

        // Crear respuestas
        for (const respuesta of respuestas) {
            const { preguntaId, respuesta: opcionSeleccionada } = respuesta;

            // Crear el objeto de respuesta
            const respuestaReq = {
                body: {
                    id: preguntaId, // Asumiendo que el id de respuesta es el mismo que el id de la pregunta
                    intento: intentoId,
                    pregunta: preguntaId,
                    opcion_seleccionada: opcionSeleccionada,
                    puntos: 0 // Inicialmente, los puntos se establecerán en 0
                }
            };

            // Crear la respuesta utilizando el controlador
            const respuestaRes = {
                status: (statusCode) => ({
                    json: (data) => {
                        console.log('Respuesta creada: ', data);
                    }
                }),
            };

            await respuestaController.getRespuesta(respuestaReq, respuestaRes);
        }
        } catch (error) {
        console.error('Error al enviar respuestas', error);
        res.status(500).send({ message: 'Error al enviar respuestas' });
    
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

