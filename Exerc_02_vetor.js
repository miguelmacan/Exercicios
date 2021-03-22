let vetorR = [4, 12, 34, 25, 17]; //Gabarito da LOTO.
let vetorA = [3, 17, 55, 21, 34, 4, 27, 29, 20, 1]; // Número da aposta.
vetorR.push(...vetorA); // aqui adicionar todos os números no vetor R utilizando push.
var Resultado = vetorR.filter(function(el, i) {
    return vetorR.indexOf(el) !=  i;
}); //Aqui utilizei o vetor Resutlado, onde apliquei o Filter e o indexOF desta forma pegando somente os números iguais.
console.log(Resultado); // Aqui monstro o resulta do filtro.
console.log(Resultado.length); //Aqui monstra a quantidade números acertou no jogo.