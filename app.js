alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
        
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }    
} 

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' //Isso se chama operador ternário
alert(`Isso aí! Você descobriuo número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/* if (tentativas > 1){
    alert(`Isso aí! Você descobriuo número secreto ${numeroSecreto} com ${tentativas} tentativas`); //Utilizando Template Strings
} else {
    alert(`Isso aí! Você descobriuo número secreto ${numeroSecreto} com ${tentativas} tentativa`); //Utilizando Template Strings
} */

