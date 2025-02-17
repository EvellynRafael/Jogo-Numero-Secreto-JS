let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Criando a função
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function exibirMensagemInicial(){
    //executando a função
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; //Quero pegar somente o valor e não o HTML inteiro
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativas);
        //Como tem mais de um botão, estarei pegando esse pelo Id (que está lá no html)
        document.getElementById('reiniciar').removeAttribute('disabled');
        //removendo o atributo que também se encontra no html

    } else {
        if (chute > numeroSecreto){

            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é menor');

        } else {

            exibirTextoNaTela('h1', 'Errou!');
            exibirTextoNaTela('p', 'O número secreto é maior');

        }

        tentativas++;

        limparCampo();
    }
}

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []; 
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ //includes verifica se o elemento está na lista
        return gerarNumeroAleatorio();
    } else {
        //push: Adicionar coisas na lista(no final).
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
   /*  return parseInt(Math.random() * 10 + 1);
    //Esse return vai fazer com que o resultado seja armazenado na variavel lá em cima. */ 
}

function limparCampo(){
    chute = document.querySelector('input'); //estou pegando o campo
    chute.value = ''; //e informando que agora quero que ele seja uma string vazia
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); //dessa vez, colocando de volta o atributo
}
