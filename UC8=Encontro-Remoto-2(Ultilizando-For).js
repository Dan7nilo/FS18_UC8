// Encontro remoto 2

// OK Percorrer de Zero até o número de alunos

// OK Se o número for par, escreva ‘par’ e o número correspondente

// OK Se o número for ímpar, escreva ‘ímpar’ e o número correspondente 

// OK Se o número for zero, escreva ‘zero’ e o número correspondente

let numeroDeAlunos = 10

for (let contador = 0; contador <= numeroDeAlunos; contador++){
    //console.log (contador)
     if(contador == 0){
        console.log("o numero atual eh zero")
     }else if (contador % 2 ==0){
         console.log("O numero "+contador + " é PAR")
     }else{
        console.log(`O numero ${contador} é IMPAR`)
     }
}