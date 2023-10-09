document.addEventListener('DOMContentLoaded', function () {
    var miFormulario = document.getElementById('miFormulario');
   
  
    miFormulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
  
        // Obtener los datos del formulario
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var pais = document.getElementById('pais').value;
        var contrasena = document.getElementById('contrasena').value;
        var genero = document.querySelector('input[name="genero"]:checked').value;
        var suscripcion = document.getElementById('suscripcion').checked;
        var comentarios = document.getElementById('comentarios').value;
  
       
        
  
  
  
        // Enviar los datos a una API (puedes reemplazar la URL por la de tu API)
        fetch('http://localhost:3000/api/Users/tarea1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nombre: nombre,
                Correo: email,
                Pais: pais,
                Contraseña: contrasena,
                Genero: genero,
                Suscribirse: suscripcion,
                Comentarios: comentarios
            })
        })
        
        .then(function(response) {
            if (response.ok) {
                // La solicitud se completó con éxito
                console.log('Formulario enviado con éxito.');
              
            } else {
                // La solicitud falló
               console.log("error")
            }
        })
        .catch(function(error) {
            // Error de red u otro error
           
                });
    });
  });
  