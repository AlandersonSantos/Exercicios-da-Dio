

//Criamos uma função que recebe dois parâmetros são eles: Vitoria e Derrota.

function analise(vitoria, derrota){ //Abrimos escopo, tudo nesse escopo pertece a função.
    
    //Criamos a variável: "saldoVitoria", que guarda uma calculo de subtração.
    let saldoVitoria = vitoria - derrota;
    
    //Criamos a variável: "resultado" que está vazia até o momento.
    let resultado;
    
    //Criamos a variável:"eloHeroi" que guarda um ARRAY/VETOR de OBJETOS.
    let eloHeroi = [
    
        //Nesse ARRAY/VETOR, guarda duas propriedades são elas: "elo" e "calc".
        //Propriedade "ELO": guarda uma string.
        //Propriedade "CALC": guarda uma função (arrow function),
        //que recebe saldoVitoria e retorna true ou false dependendo da condição.
    	{elo:"Ferro", calc: saldoVitoria => saldoVitoria < 10},
        {elo:"Bronze" , calc: saldoVitoria => saldoVitoria < 20},
        {elo:"Prata", calc: saldoVitoria => saldoVitoria < 50},
        {elo:"Ouro", calc: saldoVitoria => saldoVitoria < 80},
        {elo:"Diamante",calc: saldoVitoria => saldoVitoria < 90},
        {elo:"Lendário", calc: saldoVitoria => saldoVitoria < 100},
        {elo:"Imortal", calc: () => true}
    
    ];
    
    //Guardamos o resulta de tudo na nossa variável vazia: "resultado".
    resultado = eloHeroi.find(nivel => nivel.calc(saldoVitoria)).elo
    
    //Retornamos a seguinte mensagem.
    console.log(`O Herói tem de saldo de ${saldoVitoria} está no nível de ${resultado}`)
    
    
    
}//Fechamento do escopo.


analise(40,10)