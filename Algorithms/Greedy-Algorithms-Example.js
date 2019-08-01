let a = [5, 3, 4, 2, 1];
let t = 6;

let currentTime = 0
let numberOfThings = 0

a.sort();

for (let i = 0; i < a.length; i++) {
    currentTime += a[i];
    if (currentTime > t) { break; }
    numberOfThings++;
}
document.write(numberOfThings);

function divide(n) {
    while (n >= 0) {
        let m = 1 / n;
        n--;
        document.write(`m = ${m} and n = ${n}<br/>`);
    }
}

divide(3);

function sum(n) {
    sum = 0;
    while (i < 10) {
        sum = sum + i
    }
}

sum(4);

function choose(a, b) {
    let x = a || b;
}

let x = choose(3,4);