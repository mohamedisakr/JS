function countOnes(bitstring) {
    let count = 0;
    let n = bitstring.length;
    for (let i = 0; i < n; i++) {
        if (bitstring[i] === '1') { count++; }
    }
    return count;
}

let bitstr = '11111101';//'11101010';
let count = countOnes(bitstr);
document.write(`<h4>The number of 1s in a bit string ${bitstr} is ${count}.</h4>`);