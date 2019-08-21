function getLargestEvenInteger(a) {
    let n = a.length;
    let pos = -1;
    let max = a[0];
    for (let i = 0; i < n; i++) {
        if (a[i] % 2 === 0 && max <= a[i]) {//&& a[i] > a[pos]) { pos = i; }
            max = a[i];
            pos = i;
        }
    }
    return pos;
}

let arr = [1, 3, 5, 7, 9, 11, 13]; // [1, 2, 6, 3, 4, 5, 10, 13, 18];
let pos = getLargestEvenInteger(arr);
// document.write(`<h4>The max even integer is ${arr[pos]} and its location at ${pos}</h4>`);

// old implementation
/*
function getLargestEvenInteger(a) {
    let pos = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] % 2 === 0 && a[i] > a[pos]) { pos = i; }
    }
    return pos;
}
*/