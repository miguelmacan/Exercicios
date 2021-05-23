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
var cod = {};
var qtd = {};
var total = {};

cod = readlineSync.question('Digite o código do produto: ');
qtd = readlineSync.question('Digite a quantidade: ');

const cardarpio = [
    {
        especificacao: '100',
        preco: 1.20
    },
    {
        especificacao: '101',
        preco: 1.30
    },
        {
        especificacao: '102',
        preco: 1.50
    },
        {
        especificacao: '103',
        preco: 1.20
    },
        {
        especificacao: '104',
        preco: 1.30
    },
        {
        especificacao: '105',
        preco: 1.00
    }
]

if (cod == cardarpio[0].especificacao){
  total = qtd * cardarpio[0].preco;
  console.log("Valor do seu pedido = " + total);
}else if(cod == cardarpio[1].especificacao){
   total = qtd * cardarpio[1].preco;
  console.log("Valor do seu pedido = " + total);
}else if(cod == cardarpio[2].especificacao){
   total = qtd * cardarpio[2].preco;
  console.log("Valor do seu pedido = " + total);
}else if(cod == cardarpio[3].especificacao){
   total = qtd * cardarpio[3].preco;
  console.log("Valor do seu pedido = " + total);
}else if(cod == cardarpio[4].especificacao){
   total = qtd * cardarpio[4].preco;
  console.log("Valor do seu pedido = " + total);
}else if(cod == cardarpio[5].especificacao){
  total = qtd * cardarpio[5].preco;
  console.log("Valor do seu pedido = " + total);
}