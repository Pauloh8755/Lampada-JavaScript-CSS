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
    if(botaoPiscar.textContent == "Piscar"){
        idLigar = setInterval(ligarLampada, 500)
        idDesligar = setInterval(desligarLampada, 1000)
		botaoPiscar.textContent = "Parar"
    }
    else{
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
}
function pararPiscar(){
	clearInterval(idLigar)
	clearInterval(idDesligar)
	lampada.src = "img/desligada.jpg"
}
 
//eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscarLampada)

lampada.addEventListener("dblclick", quebrarLampada)
lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)