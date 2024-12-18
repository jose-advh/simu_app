const contenidoEnunciado = document.getElementById('contenidoEnunciado');
const contenidoPregunta = document.getElementById('contenidoPregunta');
const contadorPreguntas = document.getElementById('contadorPreguntas');
const nombreMateria = document.getElementById('nombreMateria');
const opcionesContenido = document.getElementById('opcionesContenido');
const siguienteBtn = document.getElementById('siguienteBtn'); 
const enviarBtn = document.getElementById('enviarRespuesta'); 
const verPreguntaBtn = document.getElementById('botonVerPregunta');
const apiSimulacros = `http://localhost:3005/simu/api/simulacro/generar/9`;
const usuarioId = 9; // ID del usuario
let preguntasSeleccionadas = []; // Array para almacenar las preguntas y respuestas
let preguntaActual = 0; // Índice de la pregunta actual

const obtenerPreguntas = async () => {
    try {
        const response = await fetch(apiSimulacros);
        const preguntas = await response.json();
        preguntasSeleccionadas = preguntas; // Guardar las preguntas obtenidas
        mostrarPregunta(preguntaActual);
    } catch (error) {
        console.error('Error al obtener preguntas:', error);
    }
};

const mostrarPregunta = (index) => {
    if (index < preguntasSeleccionadas.length) {
        const pregunta = preguntasSeleccionadas[index];
        nombreMateria.innerText = pregunta.nombreMateria;
        contenidoEnunciado.innerText = pregunta.enunciado;
        contadorPreguntas.innerText = preguntaActual + 1; // Mostrar el número de pregunta actual
        contenidoPregunta.innerText = pregunta.detallePregunta;
        opcionesContenido.innerHTML = `
            ${pregunta.opciones.map(opcion => `
                <label>
                    <input type="radio" name="respuesta" value="${opcion.opcion_texto}">
                    ${opcion.opcion_texto}
                </label>
            `).join('')}
        `;

        // Mostrar el botón "Siguiente" y ocultar el botón "Enviar Respuestas"
        siguienteBtn.style.display = 'block';
        enviarBtn.style.display = 'none';

        // Deshabilitar el botón "Siguiente" inicialmente
        siguienteBtn.disabled = true;

        // Agregar evento para habilitar el botón "Siguiente" si hay una opción seleccionada
        opcionesContenido.addEventListener('change', () => {
            const seleccionada = document.querySelector(`input[name="respuesta"]:checked`);
            siguienteBtn.disabled = !seleccionada; // Habilitar o deshabilitar el botón
        });

        siguienteBtn.textContent = 'SIGUIENTE';
        siguienteBtn.onclick = () => {
            guardarRespuesta(); // Guardar respuesta antes de avanzar
            preguntaActual++;
            if (preguntaActual < preguntasSeleccionadas.length) {
                mostrarPregunta(preguntaActual);
            } else {
                mostrarBotonEnviar();
            }
        };
    }
};

const guardarRespuesta = () => {
    const seleccionada = document.querySelector(`input[name="respuesta"]:checked`);
    if (seleccionada) {
        // Guardar la respuesta en la pregunta actual
        preguntasSeleccionadas[preguntaActual].respuesta = seleccionada.value; 
    } else {
        // Si no hay respuesta seleccionada, puedes manejarlo aquí (opcional)
        preguntasSeleccionadas[preguntaActual].respuesta = null; // O puedes omitir esta línea
    }
};

const mostrarBotonEnviar = () => {
    // Mostrar el botón "Enviar Respuestas" y ocultar el botón "Siguiente"
    enviarBtn.textContent = 'Enviar Respuestas';
    enviarBtn.onclick = enviarRespuestas;
    enviarBtn.style.display = 'block';
    siguienteBtn.style.display = 'none'; // Ocultar el botón "Siguiente"
};

const enviarRespuestas = async () => {
    const respuestas = preguntasSeleccionadas.map(pregunta => ({
        preguntaId: pregunta.id,
        respuesta: pregunta.respuesta || '' // Asegúrate de que haya una respuesta
    }));

    const payload = {
        usuario_id: usuarioId,
        respuestas: respuestas
    };

    try {
        const response = await fetch('http://localhost:3005/simu/api/simulacro/enviar-respuestas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        console.log('Respuestas enviadas:', result);
        // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito
    } catch (error) {
        console.error('Error al enviar respuestas:', error);
    }
};

const verPregunta = () => {
    contenidoPregunta.classList.toggle('ocultar');
}

verPreguntaBtn.addEventListener('click', verPregunta);
document.addEventListener('DOMContentLoaded', obtenerPreguntas);
    // import verificarToken from './auth.js';

// const init = async () => {
//     const datos = await verificarToken();
//     if (!datos) {
//         console.log(datos)
//         return;
//     }

// }

// document.addEventListener('DOMContentLoaded', init);


    // [
    //     {
    //       "id": 41,
    //       "nombreMateria": "Ingles",
    //       "enunciado": "Choose the correct word to complete the sentence.",
    //       "detallePregunta": "She ___ in the park every weekend.",
    //       "opciones": [
    //         {
    //           "opcion_texto": "runs"
    //         },
    //         {
    //           "opcion_texto": "run"
    //         },
    //         {
    //           "opcion_texto": "running"
    //         },
    //         {
    //           "opcion_texto": "to run"
    //         }
    //       ]
    //     },