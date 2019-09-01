function find(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        if (a[i] < a[i - 1]) { return i; }   //a[i]
    }
    return -1;
}

// const arr = [1, 2, 4, 3, 7, 8];
// let pos = find(arr);
// if (pos !== -1) { document.write(`the first term ${arr[pos]} less than the immediately preceding term.`); }
// else { document.write(`the term not found.`); }