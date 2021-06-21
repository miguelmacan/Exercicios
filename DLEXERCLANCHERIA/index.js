// ============VARIAVÉS===================
var readlineSync = require('readline-sync');
var menu = 0;
var cod1 = 0;
var cod2 = 0;
var cod3 = 0;
var qtd1 = 0;
var qtd2 = 0;
var qtd3 = 0;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total = 0;
// ===============MENU PRINCIAL=============
const pcpal = [
  "Código - Categoria",
  "  1    - Salgados", 
  "  2    - Doces", 
  "  3    - Bebidas",];
for (var i = 0; i < pcpal.length; i++) {
console.log(pcpal[i]); }
menu = readlineSync.question('Faça o seu Pedido: ');

// =============MENU SALGADOS================
if (menu == 1){
const menu01 = [
  "Código  - Produto                - Valor",
     "100     - Coxinha                - 1.20",
     "101     - Bolinho de Bacalhau    - 1.50", 
     "102     - Coxinha com Catupiry   - 2.10", 
     "103     - Espiha                 - 1.50", 
     "104     - Esfiha com Catupiry    - 2.00", 
     "105     - Pizza                  - 5.00", 
     "106     - Torta                  - 7.00", 
     "107     - Pastel de Carne        - 6.00", 
     "108     - Pastel Frango          - 6.00", 
     "109     - Pastel de Queijo       - 5.50"];
for (var i = 0; i < menu01.length; i++) {
  console.log(menu01[i]);}
// =============Tabela de Preço  SALGADOS=======
const salgados = {
  '100': {
    preco: 1.20
  },
  '101': {
    preco: 7.00
  },
  '102': {
    preco: 2.10
  },
  '103': {
    preco: 1.50
  },
  '104': {
    preco: 2.00
  },
  '105': {
    preco: 5.00
  },
  '106': {
    preco: 7.00
  },
  '107': {
    preco: 6.00
  },
  '108': {
    preco: 6.00
  },
  '109': {
    preco: 5.50
  }
}
// =============Perguntas Pedido Salgado==========
cod1 = readlineSync.question('Digite qual salgados: ');
qtd1 = readlineSync.question('Digite a quantidade: ');
// =============Calculo Pedido Salgado=============
total1 = qtd1 * salgados[cod1].preco;
console.log("valor total do pedido:" + total1); 
// =============Retorno MENU PRINCIPAL=============
const pcpal = [
  "Código - Categoria",
  "  1    - Salgados", 
  "  2    - Doces", 
  "  3    - Bebidas",];
for (var i = 0; i < pcpal.length; i++) {
console.log(pcpal[i]);}
menu={};
menu = readlineSync.question('Faça o seu Pedido: ');

// ===========MENU DOCES====================
}else if (menu == 2){
const menu02 = [
  "Código  - Produto                - Valor",
     "200     - Brigadeiro             - 1.20",
     "201     - Branquinho             - 1.50", 
     "202     - Beijinho               - 2.10", 
     "203     - Cajuzinho              - 1.50", 
     "204     - Casadinho              - 2.00", 
     "205     - Bom Bom                - 5.00", 
     "206     - Tortinhas              - 7.00", 
     "207     - Cupcake                - 6.00", 
     "208     - Bolo                   - 6.00", 
     "209     - Pavê                   - 5.50"];
for (var i = 0; i < menu02.length; i++) {
  console.log(menu02[i]);}

// =============Tabela de Preço  DOCES======
const doces = {
  '200': {
    preco: 1.20
  },
  '201': {
    preco: 1.20
  },
  '202': {
    preco: 1.30
  },
  '203': {
    preco: 1.50
  },
  '204': {
    preco: 2.10
  },
  '205': {
    preco: 2.10
  },
  '206': {
    preco: 2.00
  },
   '207': {
    preco: 3.00
  },
  '208': {
    preco: 5.00
  },
  '209': {
    preco: 6.00
  }
}
//==============Perguntas Pedido Doces======
cod2 = readlineSync.question('Digite qual doce: ');
qtd2 = readlineSync.question('Digite a quantidade: ');
// =============Calculo Pedido Doces========
total2 = qtd2 * doces[cod2].preco;
console.log("valor total do pedido:" + total2);
// =============Retorno MENU PRINCIPAL======
const pcpal = [
  "Código - Categoria",
  "  1    - Salgados", 
  "  2    - Doces", 
  "  3    - Bebidas",];
for (var i = 0; i < pcpal.length; i++) {
console.log(pcpal[i]);
}
menu = readlineSync.question('Faça o seu Pedido: ');

// ==============MENU BEBIDAS================
}else if (menu == 3){
  const menu03 = [
  "Código  - Produto                - Valor",
     "300     - Água                   - 1.00",
     "301     - Água com Gás           - 1.20", 
     "302     - Água com Sabor         - 1.50", 
     "303     - Cerveja                - 2.50", 
     "304     - Choppe                 - 3.00", 
     "305     - Choppe Escuro          - 3.00", 
     "306     - Refrigerante           - 7.00", 
     "307     - Refrigerante Diet      - 6.00", 
     "308     - Suco                   - 6.00", 
     "309     - Suco Detoxi            - 5.50"];
for (var i = 0; i < menu03.length; i++) {
  console.log(menu03[i]);
}

const bebidas = {
  '300': {
    preco: 1.00
  },
  '301': {
    preco: 1.20
  },
  '302': {
    preco: 1.50
  },
  '303': {
    preco: 2.50
  },
  '304': {
    preco: 3.00
  },
  '305': {
    preco: 3.00
  },
  '306': {
    preco: 7.00
  },
  '307': {
    preco: 6.00
  },
  '308': {
    preco: 6.00
  },
  '309': {
    preco: 5.50
  }
}

cod3 = readlineSync.question('Digite qual doce: ');
qtd3 = readlineSync.question('Digite a quantidade: ');
total3 = qtd3 * bebidas[cod3].preco;
console.log("valor total do pedido:" + total3);
// =============Retorno MENU PRINCIPAL======
const pcpal = [
  "Código - Categoria",
  "  1    - Salgados", 
  "  2    - Doces", 
  "  3    - Bebidas",];
for (var i = 0; i < pcpal.length; i++) {
console.log(pcpal[i]);
}
menu = readlineSync.question('Faça o seu Pedido: ');
}
