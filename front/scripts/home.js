const menuHamburger = document.getElementById("lakabra");
const NavLinks = document.querySelector(".nav-links");
const animatedElement = document.querySelector('#textos');

menuHamburger.addEventListener("click", () => {
    animatedElement.classList.toggle("color");
    NavLinks.classList.toggle("mobile-menu");
});


function cambiarTexto() {
      
    const textos = ["BE HONEST!", "BE LIVE!", "BE HAPPY!"]; // Lista de textos para cambiar
    let indice = 0;
  
    setInterval(() => {
      animatedElement.textContent = textos[indice];
      indice = (indice + 1) % textos.length;
      
    }, 2000); // Cambia el texto cada 2 segundos (2000 ms)
  }

 
      
   document.addEventListener("DOMContentLoaded", function() {
    // Llamar a la función aquí
    cambiarTexto()
  });