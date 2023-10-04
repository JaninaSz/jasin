const lista = ["Juan", "Pedro", "Janina", "Luis", "Luisa", "María","Nahuel", "Julián", "Lorena"];
function escribir(){
    var btnInit = document.getElementById("btn-init")
    var btnReset = document.getElementById("btn-reset")

    const nombreCurso = prompt("Ingrese la materia a cursar:");        
    const nombreAlumno = prompt("Ingrese su nombre:");
    document.getElementById("lblCurso").style.background="yellowgreen"
    document.getElementById("lblCurso").style.padding="10px"
    document.getElementById("lblCurso").innerHTML=nombreCurso;

    if (lista.includes(nombreAlumno)) {
        alert("Tu nombre ya está en esta lista.");
    } else {
        lista.push(nombreAlumno);
        alert("Listo. Has sido agregado a la lista.");
    }


    for (let i = 1; i < lista.length+1; i++) {
        //document.getElementById("ulAlumnos").innerHTML+= (i+". "+lista[i-1] + "<br>");
        const li = document.createElement("li");
        li.textContent = `Orden de lista [ ${i} ]:  ${lista[i-1]}`;
        ulAlumnos.appendChild(li);
    }

    btnInit.disabled = true
    btnReset.disabled = false;
}

function reset() {
    window.location.reload()
}