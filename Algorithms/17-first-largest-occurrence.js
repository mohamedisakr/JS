function find(array) {
    let n = array.length;
    let pos = 0;
    for (let i = 1; i < n; i++) {
        if (array[i] > array[pos]) { pos = i; }
    }
    return pos;
}

let a = [12, 16, 2, 20, 8, 13, 1, 3, 12, 9, 17, 4, 4, 17, 18, 2, 8];
let pos = find(a);
document.write(`<h4>The largest integer is ${a[pos]} and it's location at ${pos}.</h4>`);