"use strict"

const lampada = document.getElementById("lampada")

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

//eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)


