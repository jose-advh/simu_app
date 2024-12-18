const mostrarContenido = document.getElementById('panel');
const spanNombreUsuario = document.getElementById('nombreUsuario');
const contenidoSimulacros = document.getElementById('seccionSimulacros');
const contenidoNosotros = document.getElementById('seccionNosotros');
const irSeccionNosotros = document.getElementById('irSeccionNosotros');
const irSeccionSimulacros = document.getElementById('irSeccionSimulacros');
const botonCerrarSesion = document.getElementById('cerrarSesion');

const mostrarSeccionNosotros = (e) => {
    e.preventDefault();
    contenidoSimulacros.classList.add('ocultar');
    contenidoNosotros.classList.remove('ocultar');
}

const mostrarSeccionSimulacros = (e) => {
    e.preventDefault();
    contenidoNosotros.classList.add('ocultar');
    contenidoSimulacros.classList.remove('ocultar');
}

const confirmarCerrarSesion = (e) => {
    e.preventDefault();
    Swal.fire({
        title: '¿Estás seguro de cerrar sesión?',
        text: 'No podrás acceder a tu cuenta hasta que vuelvas a iniciar sesión',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            cerrarSesion();
        }
    })
}

function cerrarSesion() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}


const mainAside = document.getElementById('mainAside'); 
let placeholder = null; 

const asideFixed = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.5;

    if (scrollPosition > threshold) {
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.style.height = `${mainAside.offsetHeight}px`; 
            mainAside.parentNode.insertBefore(placeholder, mainAside);
        }
        mainAside.classList.add('fixed'); 
    } else {
        if (placeholder) {
            placeholder.remove();
            placeholder = null;
        }
        mainAside.classList.remove('fixed'); 
    }
};

window.addEventListener('scroll', asideFixed);

irSeccionNosotros.addEventListener('click', mostrarSeccionNosotros);
irSeccionSimulacros.addEventListener('click', mostrarSeccionSimulacros);
botonCerrarSesion.addEventListener('click', confirmarCerrarSesion);

window.addEventListener('scroll', asideFixed);

import verificarToken from './auth.js';

const init = async () => {
    const datos = await verificarToken();
    if (!datos) {
        mostrarContenido.classList.add('ocultar'); 
        return;
    }
    
    mostrarContenido.classList.remove('ocultar');
    spanNombreUsuario.innerText = datos.nombre;
}

document.addEventListener('DOMContentLoaded', init);