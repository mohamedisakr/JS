function getLargestEvenInteger(a) {
    let pos = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] % 2 === 0 && a[i] > a[pos]) { pos = i; }
    }
    return pos;
}

let arr = [1, 2, 6, 3, 4, 5, 10, 13, 18];
let pos = getLargestEvenInteger(arr);
document.write(`<h4>The max even integer is ${arr[pos]} and its location at ${pos}</h4>`);