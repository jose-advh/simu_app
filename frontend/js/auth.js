const Swal = window.Swal;
const formLogin = document.getElementById('formLogin');
const formRegister = document.getElementById('formRegister'); 

if (formLogin) {
    formLogin.addEventListener('submit',  async (event) => {
        event.preventDefault();
        const correo = document.getElementById('email').value;
        const contrasena = document.getElementById('password').value;
    
            const response = await fetch('http://localhost:3005/simu/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ correo, contrasena }),
            });
    
            const data = await response.json();
            formLogin.reset();
    
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Vaya...",
                    text: `${data.mensaje}`,
                    footer: 'Somos Simu'
                  });
                  return;
            }
            window.location.href = 'panel.html';
    });
}

if (formRegister) {
    formRegister.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('email').value;
        const contrasena = document.getElementById('password').value;
    
        const response = await fetch('http://localhost:3005/simu/auth/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, correo, contrasena }),
        });
    
        const data = await response.json();
        formRegister.reset()
    
        if (!response.ok) {
            Swal.fire({
                icon: "error",
                title: "Vaya...",
                text: `${data.error[0].message}`,
                footer: 'Somos Simu'
              });
              return;
        }
    
        Swal.fire({
            icon: "success",
            title: `¡El registro fue éxitoso!`,
            showConfirmButton: false,
            timer: 1000
          });
          
          setTimeout(() => {
            window.location.href = 'login.html';
          }, 1000);
    });
}