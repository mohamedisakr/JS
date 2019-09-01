function find(a) {
    let n = a.length;
    let pos = 0;
    for (let i = 1; i < n; i++) {
        if (a[i] <= a[pos]) { pos = i; }
    }
    return pos;
}

let a = [12, 16, 2, 20, 8, 13, 5, 3, 12, 9, 17, 4, 4, 17, 18, 2, 8];
let pos = find(a);
document.write(`<h4>The last occurrence of the smallest element is ${a[pos]} and it's location at ${pos}.</h4>`);