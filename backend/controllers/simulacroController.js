import axios from "axios";
import intentoController from "../controllers/intentoController.js";
import respuestaController from "../controllers/respuestaController.js";

const API_BASE_URL = "http://localhost:3005/simu/api";

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

        if (!preguntaId)
          return res
            .status(404)
            .send({ message: "No hay preguntas disponibles" });

        const [
          nombreMateriaResponse,
          enunciadoResponse,
          detallePreguntaResponse,
          opcionesResponse,
          esCorrectaResponse,
        ] = await Promise.all([
          axios.get(`${API_BASE_URL}/pregunta/aleatoria-materia/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/enunciado/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/detalle/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/opciones/${preguntaId}`),
          axios.get(`${API_BASE_URL}/pregunta/escorrecta/${preguntaId}`),
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
        },
      };

      const intentoRes = {
        status: (statusCode) => ({
          json: (data) => {
            console.log("Intento creado: ", data);
          },
        }),
      };

      await intentoController.crearIntento(intentoReq, intentoRes);
      res.status(200).json(preguntasSeleccionadas);
    } catch (error) {
      console.error("Error al generar el simulacro general", error);
      res
        .status(500)
        .send({ message: "Error al generar el simulacro general" });
    }
  },

  async enviarRespuestas(req, res) {
    try {
      const { usuario_id, respuestas } = req.body;

      console.log(usuario_id);

      const intentosResponse = await axios.get(
        `${API_BASE_URL}/intentos/${usuario_id}`
      );
      const intentos = intentosResponse.data.intentos;

      if (intentos.length === 0) {
        return res
          .status(404)
          .send({ message: "No se encontraron intentos para este usuario" });
      }

      const ultimoIntento = intentos[0];
      const intentoId = ultimoIntento.id_intento;

      for (const respuesta of respuestas) {
        const { preguntaId, respuesta: opcionSeleccionada } = respuesta;

        const respuestaReq = {
          body: {
            id: preguntaId,
            intento: intentoId,
            pregunta: preguntaId,
            opcion_seleccionada: opcionSeleccionada,
            puntos: 1,
          },
        };

        const respuestaRes = {
          status: (statusCode) => ({
            json: (data) => {
              console.log("Respuesta creada: ", data);
            },
          }),
        };

        await respuestaController.getRespuesta(respuestaReq, respuestaRes);
      }
      res.status(200).send({ message: "Respuestas enviadas correctamente" });
    } catch (error) {
      console.error("Error al enviar respuestas", error);
      res.status(500).send({ message: "Error al enviar respuestas" });
    }
  },

  async enviarResultados(req, res) {
    try {
      const { usuario_id } = req.params;

      const intentosResponse = await axios.get(
        `${API_BASE_URL}/intentos/${usuario_id}`
      );
      const intentos = intentosResponse.data.intentos;

      if (intentos.length === 0)
        return res
          .status(404)
          .send({ message: "No se encontraron intentos para este usuario" });

      const ultimoIntento = intentos[0];
      const intentoId = ultimoIntento.id_intento;

      const respuestasResponse = await axios.get(
        `${API_BASE_URL}/respuesta/intento/${intentoId}`
      );
      const respuestas = respuestasResponse.data.respuesta;

      let puntuaciones_general = 300;

      for (const respuesta of respuestas) {
        const preguntaId = respuesta.pregunta_id;

        const preguntaResponse = await axios.get(
          `${API_BASE_URL}/pregunta/${preguntaId}`
        );
        const pregunta = preguntaResponse.data;

        if (respuesta.opcion_seleccionada == pregunta.es_correcta) {
          puntuaciones_general += 10;
        }
      }

      const hora_final = new Date();

      await axios.put(`${API_BASE_URL}/intento/editar/${intentoId}`, {
        usuario_id,
        fecha_inicio: ultimoIntento.fecha_inicio,
        hora_final,
        puntuacion_general: puntuaciones_general,
      });

      res.status(200).json({ puntuaciones_general });
    } catch (error) {
      console.error("Error al enviar resultados", error);
      res.status(500).send({ message: "Error al enviar resultados" });
    }
  },
};

export default simulacroController;
