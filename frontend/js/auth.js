const formLogin = document.getElementById('formLogin');
// const formularioRegistro = document.getElementById('formRegistro'); TO-DO: REGISTER

formLogin.addEventListener('submit',  async (event) => {
    event.preventDefault();

    const correo = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;

        const response = await fetch('http://localhost:3005/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, contrasena }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.log(data.mensaje);
            return;
        }
    
        console.log('Token:', data.token ) // PRUEBA
});