function sort(a) {
    const n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; }
        }
    }
}

let arr = ['d', 'f', 'k', 'm', 'a', 'b'];   //[6, 2, 3, 1, 5, 4];
sort(arr);
console.log(arr);