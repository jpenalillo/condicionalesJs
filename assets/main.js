var estado = true;
function cambioColor(){
    var img = document.getElementById("imagen");
    if(estado){
        img.style.border = "2px solid red";
        estado = false;
    }else{
        img.style.border = "0px";
        estado = true;
    }
}
function cuentaStickers(){
    var valor1 = document.getElementById("input1").value;
    var valor2 = document.getElementById("input2").value;
    var valor3 = document.getElementById("input3").value;
    var total = Number(valor1) + Number(valor2) + Number(valor3);
    
    if(total > 10){
        document.getElementById("mensajeTickets").innerHTML = 'Llevas demasiados Stickers';
    }
}
function validaPassword(){
    var valor1 = document.getElementById("select1").value;
    var valor2 = document.getElementById("select2").value;
    var valor3 = document.getElementById("select3").value;
    if(valor1 == 9 && valor2 == 1 && valor3 == 1){
        document.getElementById('mensajePassword').innerHTML = 'Password 1 correcto';
    }else if(valor1 == 7 && valor2 == 1 && valor3 == 4){
        document.getElementById('mensajePassword').innerHTML = 'Password 2 correcto';
    }else{
        document.getElementById('mensajePassword').innerHTML = 'Password Incorrecto';
    }
}
