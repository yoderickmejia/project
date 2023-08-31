
function mifuncion() {

 // Por ejemplo, mostrarlos en la consola:

 const n1= document.getElementById("username");
 const n2= document.getElementById("password");
 
 const Nombre = n1.value;
 const Pass= n2.value;
 console.log(Nombre +"     " +Pass)


 // O enviar los datos a una API utilizando fetch (AJAX)
 fetch("http://localhost:3000/api/Users/login", {
   method: "POST",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify({ Nombre, Pass }) // Convertir los datos a formato JSON
 })
 .then(response => response.json())
 .then(data => {
   console.log("Respuesta de la API:", data.data[0].Login);



   if (data.data[0].Login=="1"){
    location.href = "http://127.0.0.1:5500/client/pages/home.html"
   }else{
    alert(" USUARIO O CONTRASEÑA INCORRECTA");
   }

   // Aquí puedes hacer algo con la respuesta de la API, si es necesario
 })
 .catch(error => {
   console.error("Error al enviar los datos:", error);

 });

}

   
  
