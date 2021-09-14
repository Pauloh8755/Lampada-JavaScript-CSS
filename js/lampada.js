"use strict"
const lampada = document.getElementById("lampada")
let idInterval

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
function lampadaDesligada(){
    return lampada.src.includes("desligada")
}
//function para trocar a imagem
function trocarImagem(){
    if(lampadaDesligada()){
        ligarLampada()
    }
    else{
        desligarLampada()
    }
}
//function para piscar lampada
function piscarLampada(){
    const piscar =  document.getElementById("piscar")
    if(piscar.textContent == "piscar"){
        idInterval = setInterval(trocarImagem,1000)
        piscar.textContent = "parar"
    }
    else{
        pararPiscar()
        piscar.textContent = "piscar"
    }
}
function pararPiscar(){
	clearInterval(idInterval)
}
 
//eventos -- (addEventListerner - recebe dois parametros(ação, callback))
//callback: uma função passada como parametro
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscarLampada)

lampada.addEventListener("dblclick", quebrarLampada)
lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", desligarLampada)