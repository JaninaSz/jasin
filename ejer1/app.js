function escribir() {
    var nombre = prompt("Ingrese su nombre:")
    var apellido = prompt("Ingrese apellido: ")
    var edad = parseInt(prompt("Ingrese la edad:"))
    var ciudad = prompt("En que provincia vive?")
    const btnInit = document.getElementById("btn-init")
    const btnReset = document.getElementById("btn-reset")

    var ficha = [nombre, apellido, edad, ciudad]

    alert(ficha)
    if (edad>21) {
        document.getElementById("pf-edad").innerHTML=nombre+", con "+edad+" años, es mayor de edad"
        
    } else {
        document.getElementById("pf-edad").innerHTML=nombre+", con "+edad+" años, es menor de edad"
    }
    document.getElementById("contFicha").style.background = "yellowgreen"
    document.getElementById("lblNombre").innerHTML = "Nombre: " + nombre + "  ";
    document.getElementById("contFicha").innerHTML = "<p>Ficha completa: </p>"
    document.getElementById("lblApellido").innerHTML = "      Apellido; " + apellido;
    document.getElementById("lblEdad").innerHTML = "Edad: " + edad + " años."
    document.getElementById("lblCiudad").innerHTML = "Ciudad: " + ciudad
    btnInit.disabled = true
    btnReset.disabled = false;

}

function reset() {
    window.location.reload()
}