const botonVerPregunta = document.getElementById('botonVerPregunta');
const contenidoPregunta = document.getElementById('contenidoPregunta');

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


