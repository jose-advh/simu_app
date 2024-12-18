const contenidoEnunciado = document.getElementById('contenidoEnunciado');
const contenidoPregunta = document.getElementById('contenidoPregunta');
const contadorPreguntas = document.getElementById('contadorPreguntas');
const nombreMateria = document.getElementById('nombreMateria');
const opcionesContenido = document.getElementById('opcionesContenido');
const siguienteBtn = document.getElementById('siguienteBtn'); 
const enviarBtn = document.getElementById('enviarRespuesta'); 
const verPreguntaBtn = document.getElementById('botonVerPregunta');
const regresarBtn = document.getElementById('regresarBtn'); 
let apiSimulacros; 
let usuarioId; 
let preguntasSeleccionadas = [];
let preguntaActual = 0; 
let intentoTerminado = false; 

import verificarToken from './auth.js'; 

const init = async () => {
    const datos = await verificarToken(); 
    if (!datos) {
        window.location.href = 'login.html'; 
        return;
    }

    console.log("Token válido, continuar con la carga de la página.");
    console.log(`Bienvenido, ${datos.nombre}`);
    console.log(datos);

    usuarioId = datos.id; 
    apiSimulacros = `http://localhost:3005/simu/api/simulacro/generar/${usuarioId}`; 

    obtenerPreguntas(); 
}

document.addEventListener('DOMContentLoaded', init);

const obtenerPreguntas = async () => {
    try {
        const response = await fetch(apiSimulacros);
        const preguntas = await response.json();
        preguntasSeleccionadas = preguntas; 
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
        contadorPreguntas.innerText = preguntaActual + 1; 
        contenidoPregunta.innerText = pregunta.detallePregunta;
        opcionesContenido.innerHTML = `
            ${pregunta.opciones.map(opcion => `
                <label>
                    <input type="radio" name="respuesta" value="${opcion.opcion_texto}">
                    ${opcion.opcion_texto}
                </label>
            `).join('')}
        `;

        siguienteBtn.style.display = 'block';
        enviarBtn.style.display = 'none';

        siguienteBtn.disabled = true;

        opcionesContenido.addEventListener('change', () => {
            const seleccionada = document.querySelector(`input[name="respuesta"]:checked`);
            siguienteBtn.disabled = !seleccionada; 
        });

        siguienteBtn.textContent = 'SIGUIENTE';
        siguienteBtn.onclick = () => {
            guardarRespuesta(); 
            preguntaActual++;
            if (preguntaActual < preguntasSeleccionadas.length) {
                mostrarPregunta(preguntaActual);
            } else {
                mostrarBotonEnviar();
            }
            actualizarBotonRegresar(); 
        };

        actualizarBotonRegresar();
    }
};

const actualizarBotonRegresar = () => {
    if (intentoTerminado) {
        regresarBtn.style.display = 'none';
    } else {
        regresarBtn.style.display = preguntaActual > 0 ? 'block' : 'none';
        regresarBtn.disabled = preguntaActual === 0; 
    }
};

regresarBtn.onclick = () => {
    if (preguntaActual > 0) {
        guardarRespuesta(); 
        preguntaActual--;
        mostrarPregunta(preguntaActual); 
    }
};

const guardarRespuesta = () => {
    const seleccionada = document.querySelector(`input[name="respuesta"]:checked`);
    if (seleccionada) {
        preguntasSeleccionadas[preguntaActual].respuesta = seleccionada.value; 
    } else {
        preguntasSeleccionadas[preguntaActual].respuesta = null; 
    }
};

const mostrarBotonEnviar = () => {
    intentoTerminado = true; 
    enviarBtn.textContent = 'Terminar';
    enviarBtn.onclick = confirmarEnvio; 
    enviarBtn.style.display = 'block';
    siguienteBtn.style.display = 'none'; 
    actualizarBotonRegresar(); 
};

const enviarResultados = async () => {
    try {
        const response = await fetch(`http://localhost:3005/simu/api/simulacro/enviar-resultados/${usuarioId}`);
        const result = await response.json();
        
        Swal.fire({
            title: 'Resultados Enviados',
            text: `Resultado final obtenido: ${result.puntuaciones_general}/500`,
            icon: 'info',
            willClose: () => {
                window.location.href = 'panel.html';
            }
        });
    } catch (error) {
        console.error('Error al enviar resultados:', error);
        Swal.fire({
            title: 'Error',
            text: 'No se pudo enviar los resultados.',
            icon: 'error',
            willClose: () => {
                window.location.href = 'panel.html';
            }
        });
    }
};

function confirmarEnvio() {
    Swal.fire({
        title: '¿Está seguro de terminar el intento?',
        text: "No podrá revertir esta acción.",
        icon: 'warning',
        showCancelButton: true, 
        confirmButtonText: 'Sí, terminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true 
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Intento Terminado',
                'Su intento ha sido finalizado con éxito.',
                'success'
            );
            enviarRespuestas();
            enviarResultados(); 
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelado',
                'El intento sigue activo.',
                'error'
            );
        }
    });
}

const enviarRespuestas = async () => {
    const respuestas = preguntasSeleccionadas.map(pregunta => ({
        preguntaId: pregunta.id,
        respuesta: pregunta.respuesta || '' 
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
document.addEventListener('DOMContentLoaded', () => {
    obtenerPreguntas();
    actualizarBotonRegresar(); // Inicializar el estado del botón "Regresar"
});