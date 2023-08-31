
function mifuncion1() {

    // Por ejemplo, mostrarlos en la consola:
   
    const n1= document.getElementById("user");
    const n2 = document.getElementById("email");
    const n3= document.getElementById("pass");
    
    const Nombre = n1.value;
    const  Email= n2.value;
    const Pass= n3.value;
    console.log(Nombre +"     " +Pass)
   
   
    // O enviar los datos a una API utilizando fetch (AJAX)
    fetch("http://localhost:3000/api/Users/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Nombre,Email, Pass }) // Convertir los datos a formato JSON
    })
    .then(response => response.json())
    .then(data => {
      console.log("Respuesta de la API:", data);
   
   
   
      
   
      // Aquí puedes hacer algo con la respuesta de la API, si es necesario
    })
    .catch(error => {
      console.error("Error al enviar los datos:", error);
   
    });
   
   }
   
      
     
   