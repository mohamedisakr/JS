function getLastEvenInteger(a) {
    let pos = -1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            pos = i;
        }
    }
    return pos;
}

let arr = [1, 2, 3, 4, 5, 6];
let pos = getLastEvenInteger(arr);
document.write(`<h4>${pos}</h4>`);