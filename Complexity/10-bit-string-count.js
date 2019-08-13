function countOneBits(s) {
    let count = 0;
    while (s != 0) {
        count++;
        s = s & (s - 1); //0;  //
    }
    return count;
}

let str = '10001010'; //10001010; // 
let count = countOneBits(str);
console.log(count);

// binary representation for 138
let binary = 0b10001010;
console.log(binary);

// octal representation for 40
let octal = 0o50;
console.log(octal);

// hexadecimal representation for 222
let hexadecimal = 0xDE;
console.log(hexadecimal);

// scientific number (very large)
let billion = 7.3e9;
console.log(billion);

// scientific number (very small)
let ms = 1.23e-6;
console.log(ms);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// console.log(1/0);
console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);