//Desafio Classificador de nível de Herói//


//Criamos variáveis 
let nikeHeroi = "Nick" //Guardar o nome do Herói
let nivel = 1000 // Guarda o nível do Herói


//Criamos uma estrutura de decisão IF,ELSE IF e ELSE (SE, SENÂO SE e SENÂO)
if(nivel <= 1000){

    calculo = nivel - 10
    console.log("Seu nível é: Ferro" + calculo)

}else if(nivel <= 2000){

    console.log("Seu nível é: Bronze")

}else if(nivel <= 5000){

    console.log("Seu nível é: Prata")

}else if(nivel <= 7000){

    console.log("Seu nível é: Ouro")

}else if(nivel <= 8000){

    console.log("Seu nível é: Pratina")

}else if(nivel <= 9000){

    console.log("Seu nível é: Ascendente")

}else if(nivel <= 10000){

    console.log("Seu nível é: Imortal")

}else{
    console.log("Radiante")
}

//Mostrando o valor guardado na variável "nikeHeroi", e mostramos o "nivel" de acordo com a estrutura de decisão
console.log("O Herói de nome: " + nikeHeroi + " está no nível de: " + nivel);





