(function() {
    // Obtener los elementos del DOM donde se mostrará la hora y la fecha
    var pHoras = document.getElementById('horas');
    var pAMPM = document.getElementById('ampm');
    var pMinutos = document.getElementById('minutos');
    var pSegundos = document.getElementById('segundos');
    var pDiaSemana = document.getElementById('diaSemana');
    var pDia = document.getElementById('dia');
    var pMes = document.getElementById('mes');
    var pYear = document.getElementById('year');
  
    // Definir los arrays de texto para los días de la semana y los meses
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
    // Funcion para obtener y mostrar la hora y la fecha actual
    var actualizarHora = function() {
      var fecha = new Date();
      var horas = fecha.getHours();
      var ampm = horas >= 12 ? 'PM' : 'AM';
      horas = horas % 12 || 12;
      var minutos = fecha.getMinutes().toString().padStart(2, '0');
      var segundos = fecha.getSeconds().toString().padStart(2, '0');
      var diaSemana = semana[fecha.getDay()];
      var dia = fecha.getDate();
      var mes = meses[fecha.getMonth()];
      var year = fecha.getFullYear();
  
      // Actualizar los elementos del DOM con la hora y la fecha actual
      pHoras.textContent = horas;
      pAMPM.textContent = ampm;
      pMinutos.textContent = minutos;
      pSegundos.textContent = segundos;
      pDiaSemana.textContent = diaSemana;
      pDia.textContent = dia;
      pMes.textContent = mes;
      pYear.textContent = year;
    };
  
    // Ejecutar la funcion actualizarHora una vez para mostrar la hora y la fecha actual
    actualizarHora();
  
    // Actualizar la hora y la fecha cada segundo usando setInterval
    var intervalo = setInterval(actualizarHora, 1000);
  })();