var posiciones=["Nahuel", "Julián", "Lorena", "Gerónimo", "Jorge", "Adrián","Candela"];


function escribir(){
    document.getElementById("conten").style.background="yellowgreen"

    for (let i = 1; i < posiciones.length+1; i++) {
        document.getElementById("lblPosicion").innerHTML+= (i+". "+posiciones[i-1] + "<br>");
    }
}

/* <li> Lorena entregó antes que Nahuel</li>
<li> Adrián no asistió y lo eliminamos de esta lista</li>
<li>Después de Gerónimo y antes de Jorge entregaron 2 alumnos 
    que no estaban en la lista: Roberto y Diego, en ese orden.</li>*/
function reordenar(){
    var btnInit = document.getElementById("btn-init")
    var btnReset = document.getElementById("btn-reset")

    posiciones.unshift("Lorena")
    posiciones.splice(3,1)
    posiciones.splice(5,1)
    posiciones.splice(4,0, "Roberto","Diego")
    for (let i = 1; i < posiciones.length+1; i++) {
        document.getElementById("lblModify").innerHTML+= (i+". "+posiciones[i-1] + "<br>");
    }
    btnInit.disabled = true
    btnReset.disabled = false;
}
function reset() {
    window.location.reload()
}