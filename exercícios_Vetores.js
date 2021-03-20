let vetorR = [21, 12, 1, 3, 7];
let vetorS = [13, 31, 3, 21, 14, 6, 1, 42, 23, 32];

let vetorPush = vetorR.push(...vetorS);

console.log(vetorPush);

console.log(vetorR);

var vetorX = vetorR.filter(function(el, i) {
    return vetorR.indexOf(el) != i;
});
console.log(vetorX);