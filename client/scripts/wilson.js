
    document.getElementById('miFormulario').addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío tradicional del formulario

        // Obtén los datos del formulario
        const formData = new FormData(this);

        // URL de la API a la que deseas enviar los datos
        const apiUrl = 'http://localhost:3000/api/Users/Wilson';

        // Configura la solicitud POST a la API
        fetch(apiUrl, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json()) // Convierte la respuesta de la API a JSON
        .then(data => {
            // Maneja la respuesta de la API aquí
            console.log('Respuesta de la API:', data);

            // Puedes redirigir al usuario o mostrar un mensaje de éxito aquí
        })
        .catch(error => {
            // Maneja cualquier error de la solicitud
            console.error('Error al enviar la solicitud:', error);
        });
    });
