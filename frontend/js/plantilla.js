const contenidoEnunciado = document.getElementById('contenidoEnunciado');
const contenidoPregunta = document.getElementById('contenidoPregunta');
const contadorPreguntas = document.getElementById('contadorPreguntas');
const nombreMateria = document.getElementById('nombreMateria');
const opcionesContenido = document.getElementById('opcionesContenido');
const siguienteBtn = document.getElementById('siguienteBtn'); 
const enviarBtn = document.getElementById('enviarRespuesta'); 
const verPreguntaBtn = document.getElementById('botonVerPregunta');
const regresarBtn = document.getElementById('regresarBtn'); // Obtener el botón de regresar
let apiSimulacros; // Declarar la variable sin inicializar
let usuarioId; // Declarar la variable sin inicializar
let preguntasSeleccionadas = [];
let preguntaActual = 0; 
let intentoTerminado = false; 

import verificarToken from './auth.js'; // Importar la función

const init = async () => {
    const datos = await verificarToken(); // Llamar a la función para verificar el token
    if (!datos) {
        window.location.href = 'login.html'; // Redirigir al login si no hay token
        return;
    }

    // Aquí puedes continuar con la lógica de tu aplicación si el token es válido
    console.log("Token válido, continuar con la carga de la página.");
    console.log(`Bienvenido, ${datos.nombre}`); // Ejemplo de uso de los datos del usuario
    console.log(datos);

    usuarioId = datos.id; // Asignar el id del usuario
    apiSimulacros = `http://localhost:3005/simu/api/simulacro/generar/${usuarioId}`; // Usar datos.id en la URL

    obtenerPreguntas(); // Llamar a obtenerPreguntas después de inicializar apiSimulacros
}

document.addEventListener('DOMContentLoaded', init);

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
            actualizarBotonRegresar(); // Actualizar el estado del botón "Regresar"
        };

        // Actualizar el estado del botón "Regresar"
        actualizarBotonRegresar();
    }
};

// Mostrar el botón "Regresar" y habilitarlo o deshabilitarlo según la pregunta actual
const actualizarBotonRegresar = () => {
    // Ocultar el botón "Regresar" si se ha terminado el intento
    if (intentoTerminado) {
        regresarBtn.style.display = 'none';
    } else {
        regresarBtn.style.display = preguntaActual > 0 ? 'block' : 'none'; // Mostrar si no es la primera pregunta
        regresarBtn.disabled = preguntaActual === 0; // Deshabilitar si es la primera pregunta
    }
};

// Agregar evento al botón "Regresar"
regresarBtn.onclick = () => {
    if (preguntaActual > 0) {
        guardarRespuesta(); // Guardar respuesta antes de regresar
        preguntaActual--;
        mostrarPregunta(preguntaActual); // Mostrar la pregunta anterior
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
    intentoTerminado = true; // Marcar el intento como terminado
    enviarBtn.textContent = 'Terminar';
    enviarBtn.onclick = confirmarEnvio; // Cambiar aquí para asignar la función
    enviarBtn.style.display = 'block';
    siguienteBtn.style.display = 'none'; 
    actualizarBotonRegresar(); // Asegurarse de que el botón "Regresar" esté oculto
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