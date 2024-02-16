let numeroSecreto = 0;
console.log(numeroSecreto);

let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario(){
    alert("Click desde el botón");
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;


    //si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");

    }else {

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto)
    console.log(intentos)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { //el usuario no acertó
        
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")
        } else {
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
     document.querySelector("#valorUsuario").value =" ";
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Elegí un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio intervalo
    //generar el número aleatorio
   
    //inicializar el número intentos
    condicionesIniciales();
     //deshabilitar el botón
     document.querySelector("#reiniciar").setAttribute("disabled","true")
    
}

condicionesIniciales();





