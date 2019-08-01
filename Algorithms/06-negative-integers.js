function findNegatives(a) {
    let n = a.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] < 0) { count++; }
    }
    return count;
}

let arr = [-32, 28, -90, -88, 100, 97, 85, -14, 14, -22, 8, 69, 12, 17, 31, 43, 89, -65, 39, 23];
let count = findNegatives(arr);