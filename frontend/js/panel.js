const velocidadScroll = 6;
const contenidoPanel = document.getElementById('panelContenido');
const spanNombreUsuario = document.getElementById('nombreUsuario')

const verificarToken = async () => {
    const token = localStorage.getItem('token');
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

        contenidoPanel.classList.remove('ocultar');
        const datos = jwt_decode(token); 
        console.log('Datos del token:', datos);
        spanNombreUsuario.innerText = datos.nombre;

    } catch (error) {
        console.error('Error al verificar el token:', error.message);
        alert('Sesión no válida, por favor inicia sesión nuevamente.');
        window.location.href = 'login.html'; 
    }
}

document.addEventListener('DOMContentLoaded', verificarToken);
document.addEventListener("wheel", (event) => {
    event.preventDefault(); 
    window.scrollBy({
      top: event.deltaY * velocidadScroll, 
      left: 0,
    });
  }, { passive: false }); 
  