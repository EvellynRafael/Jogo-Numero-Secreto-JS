//Olá Mundo
function exibirOla(){
    console.log('Olá Mundo');
}

exibirOla();

//Exibir nome
function exibirNome(nome){
    console.log(`Olá ${nome}`);
}

exibirNome('Maria');

//Dobro do número
function numeroDobro(numero){
    return numero * 2;
}

let resultado = numeroDobro(21);
console.log(resultado);

//Média
function mediaNumeros(a, b, c) {
    return (a + b + c) / 3;
}

let media = mediaNumeros(6, 7, 9);
console.log(media);

//Maior número
function maiorNumero(a, b) {
    return a> b ? a : b;
}

let maior = maiorNumero(5, 10);
console.log(a > b ? a : b);

//multiplicacao
function numeroMult(a){
    return a * a;
}

let mult = numeroMult(21);
console.log(mult);
