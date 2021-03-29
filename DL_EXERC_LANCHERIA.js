console.log("====== Cardápio Lanchonete ======"); //Titulo do Programa.
console.log(" "); //Para Manter um espaço vazio ente o Titulo e o Cardápio.
console.log("Especificação	  Código	Preço"); //Título dos Campos
console.log("Cachorro quente	  100	    R$ 1,20"); //item do cardápio
console.log("Bauru simples     101	    R$ 1,30");//item do cardápio
console.log("Bauru com ovo     102	    R$ 1,50");//item do cardápio
console.log("Hambúrger	      103	    R$ 1,20");//item do cardápio
console.log("Cheeseburguer	  104	    R$ 1,30");//item do cardápio
console.log("Refrigerante	  105	    R$ 1,00");//item do cardápio
console.log(" ");//Para Manter um espaço vazio.
console.log("=================================="); // linha para separar o cardápio das opções de escolha.
console.log(" ");//Para Manter um espaço vazio.

//++++++++++++++++++++++++++++++++++++++++++++

var readlineSync = require('readline-sync');
var cod = 0;
var qtd = 0;
var total = 0;

cod = readlineSync.question('Digite o código do produto: ');
qtd = readlineSync.question('Digite a quantidade: ');

console.log("confirmado código = " + cod );
console.log("confirmado quantidade = " + qtd);

if (cod == 100){
  total = qtd * 1.20;
console.log("Valor do seu pedido = " + total);
}else if (cod == 101){
  total = qtd * 1.30;
console.log("Valor do seu pedido = " + total);
} else if (cod == 102){
  total = qtd * 1.50;
console.log("Valor do seu pedido = " + total);
} else if (cod == 103){
  total = qtd * 1.20;
console.log("Valor do seu pedido = " + total);
} else if (cod == 104){
  total = qtd * 1.30;
console.log("Valor do seu pedido = " + total);
} else if (cod == 105) {
  total = qtd * 1.00;
console.log("Valor do seu pedido = " + total);
}