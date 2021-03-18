let vetorR = [21, 12, 1, 3, 7];
let vetorS = [13, 31, 3, 21, 14, 6, 1, 42, 23, 32];

let vetorPush = vetorR.push(...vetorS);

function resultado(vetor){
    let sorted = vetor.sort();
    let odd;
    sorted.forEach((element, index) => {
        let thisElement = sorted[index];
        let nextEle = sorted[index +1];

        if (thisElement == nextEle){
            //index++;
        } else {
            odd = thisElement;
        }
    })
    return odd;
    
}

console.log(resultado(vetorR));

console.log(vetorPush);

console.log(vetorR);
