// Atividade 5: Encontro Remoto 2:

// Listar alunos de 1 a 10

//Percorrer de Zero até o número de alunos
//Se o número for par, escreva ‘par’ e o número correspondente
//Se o número for ímpar, escreva ‘ímpar’ e o número correspondente 
//Se o número for zero, escreva ‘zero’ e o número correspondente

let numeroDeAlunos = 10

let contador = 0
while (contador <= numeroDeAlunos){
     if(contador == 0){
        console.log("o numero atual eh zero")
     }else if (contador % 2 != 1){
         console.log("O numero "+contador + " é IMPAR")
     }else{
        console.log(`O numero ${contador} é PAR`)
     }
     contador++
}

//////////////////////////////////////////

// Atividade 4: Verificar o nome dos alunos individualmente

let nomeDeAlunos = ["Danilo","Caique","Luana","Rose"]
for (let nome of nomeDeAlunos){
    console.log(`Esta pessoa se chama ${nome}`)
}

// Verificando se a pessoa tem permisão para entrar na festa
// Requisitos:
// Ter mais de 18 anos;
// Ter um ingresso pra festa;

// Idade da pessoa:
 let idade = 22
 // Essa pessoa tem ingresso?
 let ingresso = true 
 // "=" é ultilizado para atribuir um valor
 if (idade >= 18 && ingresso == true 
    //"==" é ultilizado para comparar um valor
    ){
    console.log("bem vindo a festa!")

 }else{
    console.log("Voce não tem permissão para entrar")
 }