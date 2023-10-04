
function agregar(){

    var nombre=prompt("Ingrese su nombre:")
    var apellido=prompt("Ingrese apellido: ")

    document.getElementById("ulAlumnos").innerHTML+="<li>"+nombre +" " +apellido+"</li>";

    }

    //con esta funcion mostramos el contenido faltante del ultimo parrafo
 function mostrar() {
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";

    var enlace = document.getElementById("enlace");
    enlace.className = "oculto";
    }