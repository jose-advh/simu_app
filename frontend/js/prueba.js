const apiGenerarSimulacro = 'http://localhost:3005/simu/api/simulacro/generar';
const apiEnviarRespuestas = 'http://localhost:3005/simu/api/respuesta/9';
const enunciadoElemento = document.getElementById('enunciado');
const opcionesElemento = document.getElementById('opciones');
const botonSiguiente = document.getElementById('botonSiguiente');
const panelFinal = document.getElementById('panelFinal'); // Nuevo panel para mostrar el resultado

let preguntas = [];
let respuestas = [];
let indiceActual = 0;

async function cargarSimulacro() {
  try {
    const response = await fetch(apiGenerarSimulacro, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario_id: 9 }) 
    });

    if (!response.ok) throw new Error('Error al generar simulacro');

    preguntas = await response.json();
    mostrarPregunta();
  } catch (error) {
    console.error('Error al cargar el simulacro:', error);
  }
}

function mostrarPregunta() {
  const pregunta = preguntas[indiceActual];

  enunciadoElemento.textContent = pregunta.enunciado;

  opcionesElemento.innerHTML = ''; // Limpiar opciones anteriores
  pregunta.opciones.forEach(opcion => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="radio" name="respuesta" value="${opcion.id}">
        ${opcion.opcion_texto}
      </label>
    `;
    opcionesElemento.appendChild(li);
  });

  botonSiguiente.disabled = true; 
}

// Manejar selección de respuesta
opcionesElemento.addEventListener('change', (event) => {
  if (event.target.name === 'respuesta') {
    botonSiguiente.disabled = false;
  }
});

// Ir a la siguiente pregunta
botonSiguiente.addEventListener('click', () => {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  if (respuestaSeleccionada) {
    respuestas.push({
      preguntaId: preguntas[indiceActual].id,
      respuesta: parseInt(respuestaSeleccionada.value)
    });

    indiceActual++;

    if (indiceActual < preguntas.length) {
      mostrarPregunta();
    } else {
      enviarRespuestas(respuestas);
    }
  }
});


// {
//     "id": 1,
//     "intento": 1,
//     "pregunta": 46,
//     "opcion_seleccionada": "opcion",
//     "puntos": 10
//   }
// Enviar respuestas al servidor
async function enviarRespuestas() {
    try {
      // Obtener el intentoId
      const intentoResponse = await fetch(`http://localhost:3005/simu/api/intentos/9`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!intentoResponse.ok) throw new Error('Error al obtener el intento');
  
      const intentoData = await intentoResponse.json();
      const intentoId = intentoData.id; // Suponiendo que la respuesta contiene el id del intento
  
      // Preparar las respuestas en el formato requerido
      const respuestasFormateadas = respuestas.map(respuesta => ({
        intento: intentoId,
        pregunta: respuesta.preguntaId, // ID de la pregunta
        opcion_seleccionada: respuesta.respuesta, // Opción seleccionada
        puntos: 10 // Puntos fijos
      }));
  
      // Enviar las respuestas al servidor
      const response = await fetch(apiEnviarRespuestas, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(respuestasFormateadas) // Enviar el array de respuestas
      });
  
      if (!response.ok) throw new Error('Error al enviar respuestas');
  
      const resultado = await response.json();
      mostrarResultado(resultado.puntuacion);
    } catch (error) {
      console.error('Error al enviar respuestas:', error);
    }
  }

// Mostrar resultados finales
function mostrarResultado(puntuacion) {
  // Ocultar la interfaz de preguntas
  enunciadoElemento.style.display = 'none';
  opcionesElemento.style.display = 'none';
  botonSiguiente.style.display = 'none';

  // Mostrar el panel final
  panelFinal.textContent = `¡Simulacro terminado! Tu puntuación final es: ${puntuacion}`;
  panelFinal.style.display = 'block'; // Asegúrate de que el panel sea visible
}

// Iniciar simulacro
cargarSimulacro();