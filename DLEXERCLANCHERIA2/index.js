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

console.log(cod);
console.log(qtd);

const cardarpio = [
    {
        especificacao: 'Cachorro quente',
        preco: 1.20
    },
    {
        especificacao: 'Bauru Simples',
        preco: 1.30
    },
        {
        especificacao: 'Bauru com ovo',
        preco: 1.50
    },
        {
        especificacao: 'Hambúrger',
        preco: 1.20
    },
        {
        especificacao: 'Cheeseburguer',
        preco: 1.30
    },
        {
        especificacao: 'Refrigerante',
        preco: 1.00
    }
]

