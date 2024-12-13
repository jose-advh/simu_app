const velocidadScroll = 6;

const verificarToken = async () => {
    const token = localStorage.getItem('token');
     // O sessionStorage
    if (!token) {
        console.log('No se encontró token, redirigiendo a login...');
        window.location.href = 'login.html'; // Redirigir si no hay token
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
            throw new Error('Token no no válido');
        }
        // Si el token es válido, puedes continuar cargando el panel
    } catch (error) {
        console.error(error);
        window.location.href = 'login.html'; // Redirigir si el token no es válido
    }
};

document.addEventListener('DOMContentLoaded', verificarToken);


document.addEventListener("wheel", (event) => {
    event.preventDefault(); 
    window.scrollBy({
      top: event.deltaY * velocidadScroll, 
      left: 0,
      behavior: "auto", 
    });
  }, { passive: false }); 
  