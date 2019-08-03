function sortFirstThree(a) {
    let n = 3;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
}

let array = [12, 16, 2, 20, 8, 13, 5, 3, 12, 9, 17, 4, 4, 17, 18, 2, 8];
sortFirstThree(array);
