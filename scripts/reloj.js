// Definir los arrays de texto para los días de la semana y los meses

function actualizarHora() {
    
alert("wte")
//Extraer los datos 
    var fecha = new Date();
    var segundos = fecha.getSeconds();
    var minutos = fecha.getMinutes();
    var horas = fecha.getHours();

//Asignar un elemento al objeto html     
    var elementoHoras = document.getElementById("pHoras");
    var elementoMinutos = document.getElementById("pMinutos");
    var elementoSegundos = document.getElementById("pSegundos");
    ap = (horas < 12) ? "<span>AM</span>" : "<span>PM</span>";

    var pSaludo = document.getElementById("contSaludo");

//Cargar el elemento con los datos actuales   
    pHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;
    alert(horas)

//Establecer saludo, segun la hora
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

 if (horas < 10) horas = 0 + horas;
 if (minutos < 10) minutos = "0" + minutos;
 if (segundos < 10) segundos = "0" + segundos;
 let HoraActual = horas + ":" + minutos + ":" + segundos
 $("#HoraActual").text(horas + ":" + minutos + ":" + segundos);
 alert(horas + ":" + minutos + ":" + segundos);

 horas = checkTime(horas);
 minutos = checkTime(minutos);
 segundos = checkTime(segundos);

 document.getElementById("contClock").innerHTML = horas + "fre:" + minutos + ":" + segundos + " " + ap;
}
function actualizarFecha(){
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    var fecha = new Date();
    var DiaSemana = semana[fecha.getDay()];    
    var dia = fecha.getDate();
    var mes = meses[fecha.getMonth()];
    var year = fecha.getFullYear();

    DiaSemana.textContent=semana;
    var DiaSemana = document.getElementById('pDia')

    
    pDiaSemana.textContent = semana;
    pDia.textContent = dia;
    pMes.textContent = mes;
    pYear.textContent = year;
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}
setInterval(actualizarHora, 1000);
var intervalo = setInterval(actualizarHora, 1000);