class heroiClass{
    constructor(nome, tipo, ataque){
    
        this.nome = nome
        this.tipo = tipo
        this.ataque = ataque
    
    }

    escreve(){

        console.log(`O jogador ${this.nome}, escolheu o tipo ${this.tipo} com ataque de ${this.ataque}`)
    
    }
}


let play = new heroiClass("Alan", "Mago","Magia")


play.escreve()