
function state() {
    valorActivo = document.querySelector('input[name="stat"]:checked').value;
    alert("Usted se encuentra con " +valorActivo)
}

function comparar(){
    var num1=parseInt( document.getElementById("num1").value)
    var num2=parseInt( document.getElementById("num2").value)
    var btnReset = document.getElementById("btn-reset")
    /*if(num1 == "" || num2 == ""){                                                                                                                              == ""){
        alert("Debe ingresar ambos numeros")}*/
    

    if (num1>num2){
        alert("El primer valor es mayor")
    }else{
        alert("El segundo valor es mayor")
    }

    btnReset.disabled = false;
}



function sumar(){
    var btnReset = document.getElementById("btn-reset")
    var val1=parseInt(document.getElementById("val1").value)
    var val2=parseInt(document.getElementById("val2").value)
    var suma=val1+val2;
    
    confirm("La suma de ambos valores es "+suma)
    btnReset.disabled = false;
}
function limpiar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("val1").value="";
    document.getElementById("val2").value="";
}