

function agregar() {
   var nombre = prompt("Ingrese su nombre:")
   var apellido = prompt("Ingrese apellido: ")

   document.getElementById("ulAlumnos").innerHTML += "<li>" + nombre + " " + apellido + "</li>";
   var info = document.getElementById("infopag");
   info.innerHTML = "Bienvenido/a " + nombre + "!<br><br> Gracias por usar nuestra página web!";
}

//con esta funcion mostramos el contenido faltante del ultimo parrafo
function mostrar() {
      var elemento = document.getElementById("adicional"),
          elemento2 = document.getElementById("leerMenos");
      
      elemento.className="visible";
      elemento2.className="visible";
      
      var enlace = document.getElementById("enlace");
      enlace.className="oculto";  
      
  }

  function ocultarSpan() {
   var leerMenos = document.getElementById("adicional"),
       elemento2 = document.getElementById("leerMenos");
   
       leerMenos.className="oculto";
       elemento2.className="oculto";
   
   var enlace = document.getElementById("enlace");
   enlace.className="visible"; 
}
