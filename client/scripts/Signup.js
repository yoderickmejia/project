


function comprueba()
{const n1= document.getElementById("user");
const n2 = document.getElementById("email");
const n3= document.getElementById("pass");

const Nombre = n1.value;
const  Email= n2.value;
const Pass= n3.value;
console.log(Nombre +"     " +Pass)

  fetch("http://localhost:3000/api/Users/comprueba", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({Email}) // Convertir los datos a formato JSON
  })
  .then(response => response.json())
  .then(data => {
    console.log("Respuesta de la API:", data);
  
   
    // Aquí puedes hacer algo con la respuesta de la API, si es necesario
  })
  .catch(error => {
    console.error("Error al enviar los datos:", error);
 
  });

  if (data.data[0].Login ==="1"){
    
    mifuncion1(Nombre,Email,Pass);
   }else{
    console.log(" este mail ya tiene una cuenta");
   }

}

function mifuncion1( Nombre, Email , Pass) {

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
   
      
     
   