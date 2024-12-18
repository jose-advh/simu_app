const contenidoEnunciado = document.getElementById('contenidoEnunciado');
const botonVerPregunta = document.getElementById('botonVerPregunta');
const contenidoPregunta = document.getElementById('contenidoPregunta');
const apiSimulacros = 'http://localhost:3005/simu/api/simulacro/generar';
let numeroPregunta = 0;


async function cargarSimulacro() {
    try {
      // Datos a enviar
      const datosEnviar = { usuario_id: '123' };
  
      // Configuración de la solicitud
      const response = await fetch(apiSimulacros, {
        method: 'POST', // Cambias el método a POST
        headers: {
          'Content-Type': 'application/json', // Asegúrate de que el servidor espere JSON
        },
        body: JSON.stringify(datosEnviar), // Convertimos los datos a JSON
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
  
      function mostrarSimulacro() {
        if (numeroPregunta < data.length) {
          contenidoEnunciado.innerText = data[numeroPregunta].enunciado;
        } else {
          contenidoEnunciado.innerText = 'No hay más preguntas.';
        }
      }
  
      mostrarSimulacro();
  
      botonSiguiente.addEventListener('click', () => {
        numeroPregunta++;
        mostrarSimulacro();
      });
    } catch (error) {
      console.error('Hubo un problema con el fetch:', error);
    }
  }

  cargarSimulacro();


const abrirPregunta = () => {
    if (contenidoPregunta.style.display === 'block') {
        contenidoPregunta.style.display = 'none';
        botonVerPregunta.textContent = 'VER PREGUNTA ▼'
        return;
    } 
        contenidoPregunta.style.display = 'block';
        botonVerPregunta.textContent = 'OCULTAR PREGUNTA ▲'
    }

    botonVerPregunta.addEventListener('click', abrirPregunta);



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