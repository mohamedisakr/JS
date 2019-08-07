function find(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        if (a[i] < a[i - 1]) { return a[i]; }
    }
    return -1;
}

const arr = [1, 2, 4, 3, 7, 8];
let res = find(arr);
if (res !== -1) { document.write(`the first term ${res} less than the immediately preceding term.`); }
else { document.write(`the term not found.`); }