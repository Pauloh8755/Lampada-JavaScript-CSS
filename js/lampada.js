"use strict"
const lampada = document.getElementById("lampada")
let idLigar
let idDesligar

//funções
function ligarLampada(){
    if(lampadaInteira()){
        lampada.src = "img/ligada.jpg"
    }
}
function desligarLampada(){
    if(lampadaInteira()){
        lampada.src = "img/desligada.jpg"
    }
}
function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
}
function lampadaInteira(){
    //utilizando includes para identificar se a lampada está inteira
    return lampada.src.includes("ligada")
}
function piscarLampada(){
    const botaoPiscar = document.getElementById("piscar")
    if(botaoPiscar.textContent == "piscar"){
        setInterval(ligarLampada, 500)
        setInterval(desligarLampada, 1000)
    }
    else{
        parar()
        botaoPiscar.textContent = "piscar"
    }
    
}
function parar(){
    
}
 
     

//eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscarLampada)
document.getElementById("parar").addEventListener("click", parar)
lampada.addEventListener("dblclick", quebrarLampada)
lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)


