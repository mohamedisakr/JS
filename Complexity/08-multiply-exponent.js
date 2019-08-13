/**
 * 
 * @param {real number } x
 * @param {positive integer} k 
 */
function multiply(x, k) {
    let y = (x ** 2);
    let r = 1;
    for (let i = 0; i < k; i++) {
        r *= y;
    }
    return r;
}

let a = 2;
let b = 3;
let r = multiply(a, b);
console.log(r);