const mostrarContenido = document.getElementById('panel');
const spanNombreUsuario = document.getElementById('nombreUsuario');
const contenidoSimulacros = document.getElementById('seccionSimulacros');
const contenidoNosotros = document.getElementById('todo');
const irSeccionNosotros = document.getElementById('irSeccionNosotros');
const irSeccionSimulacros = document.getElementById('irSeccionSimulacros');
const irSimulacro = document.getElementById('irSimulacro');
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

const redirigirSimulacro = () => {
    window.location.href = 'plantilla.html';
}

window.addEventListener('scroll', asideFixed);
irSeccionNosotros.addEventListener('click', mostrarSeccionNosotros);
irSeccionSimulacros.addEventListener('click', mostrarSeccionSimulacros);
botonCerrarSesion.addEventListener('click', confirmarCerrarSesion);
irSimulacro.addEventListener('click', redirigirSimulacro);

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

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const cardContainer = document.getElementById("card-container");
const dots = document.querySelectorAll(".dot");

let index = 0; 

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-purple-custom", i === index);
    dot.classList.toggle("bg-gray-300", i !== index);
  });
}

leftArrow.addEventListener("click", () => {
  if (index > 0) {
    index--;
    cardContainer.scrollLeft -= cardContainer.offsetWidth; 
    updateDots();
  }
});

rightArrow.addEventListener("click", () => {
  if (index < dots.length - 1) {
    index++;
    cardContainer.scrollLeft += cardContainer.offsetWidth; 
    updateDots();
  }
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    cardContainer.scrollLeft = cardContainer.offsetWidth * i; 
    updateDots();
  });
});

updateDots();

document.addEventListener('DOMContentLoaded', init);