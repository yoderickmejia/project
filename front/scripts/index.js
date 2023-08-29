

function pararAnimacao() {
  myDiv.classList.remove('animate-slide');
}

function parar() {
  myDiv.classList.remove('anima-slide');
}
function moverDiv() {
    var div = document.getElementById("boton");
    const myDiv = document.getElementById('myDiv');
    const elh2= document.getElementById('h2');
    const titulo = document.getElementById('titulo');
    const texto = document.getElementById('texto');
    const eltexto = document.getElementById('el-texto');
    var submit= document.getElementById('submit');
    var user= document.getElementById('User');
    var icono= document.getElementById('icono-persona');

    const textoOriginal = "Don't have an";
   
    
      if (div.classList.contains("boton-signup")) {
      titulo.textContent= "Have  an  acccount?"
      titulo.style.transform = 'translateX(450px)';
      myDiv.style.transform = 'translateX(-675px)';
      myDiv.classList.add('animate-slide');
      setTimeout(pararAnimacao, 500);
      boton.style.transform = 'translateX(450px)';
      texto.style.transform = 'translateX(450px)';
      div.classList.remove("boton-signup");
      div.classList.add("boton-login");
      elh2.textContent="SIGN UP"
      submit.classList.remove("Logear");
      submit.classList.add("Registrar")
      console.log(submit.classList);
            div.textContent="Log In";
      eltexto.style.color="white";
      submit.textContent="SIGN UP";
      user.classList.remove("no-ver");
      icono.classList.remove("no-ver");
    } else {
      submit.classList.remove("Registrar")
      submit.classList.add("Logear")
      console.log(submit.classList);
      submit.textContent="LOG IN";
     titulo.textContent="Don't have an  acccount?";
     titulo.innerHTML=   "Don't have an <br> acccount?";
    titulo.style.transform = 'translateX(0)';
        myDiv.style.transform = 'translateX(-270px)';
        myDiv.classList.add('anima-slide');
        elh2.textContent="LOG IN"
      setTimeout(parar, 500);
      user.classList.add("no-ver");
      icono.classList.add("no-ver");
      eltexto.style.color="#a29795";
        boton.style.transform = 'translateX(0)';
        div.textContent="Sing Up";
        texto.style.transform = 'translateX(0)';
      div.classList.remove("boton-login");
      div.classList.add("boton-signup");
    } 
  }



 