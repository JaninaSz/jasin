function actualizarHora() {

    var fecha = new Date();
    var segundos = fecha.getSeconds();
    var minutos = fecha.getMinutes();
    var horas = fecha.getHours();

    var elementoHoras = document.getElementById("pHoras");
    var elementoMinutos = document.getElementById("pMinutos");
    var elementoSegundos = document.getElementById("pSegundos");
    ap = (horas < 12) ? "<span>AM</span>" : "<span>PM</span>";

    var pSaludo = document.getElementById("contSaludo");

    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;


    if (horas >= 8 && minutos >= 1 && horas < 12) {
        pSaludo.textContent = "buenos días";
    }
    if (horas >= 12 && minutos >= 1 && horas < 19) {
        pSaludo.textContent = "buenas tardes";
    }
    if (horas >= 19 && minutos >= 1) {
        pSaludo.textContent = "buenas noches";
    }
 //Agregar un 0 detrás de los números menores a 10

 horas = checkTime(horas);
 minutos = checkTime(minutos);
 segundos = checkTime(segundos);

 document.getElementById("contClock").innerHTML = horas + ":" + minutos + ":" + segundos + " " + ap;


   
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}
setInterval(actualizarHora, 1000);
