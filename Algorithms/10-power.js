/**
 * compute x^n, where x is a real number and n is an integer
 * return integer .
 * @param {x} arg A real number.
 * @param {n} arg An integer number (exponent).
 */
function compute(x, n) {
    if (n === 0) { return 1; }
    let mul = 1;
    for (let i = 0; i < Math.abs(n); i++) { mul *= x; }

    if (n < 0) { return parseFloat(1 / mul); }
    return mul;
}

let a = 2;
let b = -4; //0; //4; // 
let res = compute(a, b);
document.write(`<h4>${a} to the power of ${b} is equal to ${res}.</h4>`);
