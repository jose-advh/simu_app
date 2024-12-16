const mostrarContenido = document.getElementById('panel');
const mainAside = document.getElementById('mainAside');
const spanNombreUsuario = document.getElementById('nombreUsuario');

const contenidoSimulacros = document.getElementById('seccionSimulacros');
const contenidoNosotros = document.getElementById('seccionNosotros');
const irSeccionNosotros = document.getElementById('irSeccionNosotros');
const irSeccionSimulacros = document.getElementById('irSeccionSimulacros');

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

const asideFixed = () => {
    const scrollPosition = window.scrollY;
    const threshold = window.innerHeight * 0.5;

    if (scrollPosition > threshold) {
        mainAside.classList.add('fixed')
    } else {
        mainAside.classList.remove('fixed');
    }
}

irSeccionNosotros.addEventListener('click', mostrarSeccionNosotros);
irSeccionSimulacros.addEventListener('click', mostrarSeccionSimulacros);

window.addEventListener('scroll', asideFixed);






const verificarToken = async () => {
    const token = localStorage.getItem('token');
    const datos = jwt_decode(token); 
    
    if (!token) {
        console.log('No se encontró token, redirigiendo a login...');
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:3005/simu/auth/validar-token', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Token expirado o inválido');
            } else {
                throw new Error('Error en el servidor');
            }
        }

        mostrarContenido.classList.remove('ocultar');
        spanNombreUsuario.innerText = datos.nombre;

    } catch (error) {
        console.error('Error al verificar el token:', error.message);
        alert('Sesión no válida, por favor inicia sesión nuevamente.');
        window.location.href = 'login.html'; 
    }
}

document.addEventListener('DOMContentLoaded', verificarToken);
