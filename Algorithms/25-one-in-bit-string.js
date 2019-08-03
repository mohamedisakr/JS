function countOnes(bitstring) {
    let count = 0;
    let n = bitstring.length;
    for (let i = 0; i < n; i++) {
        if (bitstring[i] === '1') { count++; }
    }
    return count;
}

let strbit = '11111101';//'11101010';
let count = countOnes(strbit);
document.write(`<h4>The number of 1s in a bit string ${strbit} is ${count}.</h4>`);