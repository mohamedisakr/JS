function getMode(a) {
    let n = a.length;
    let mode = 0;
    let count = 0;
    let prev = 0;
    let largest = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] === a[i + 1]) {
            mode = a[i];
            count++;
        }
        else {
            if (count > largest) {
                largest = count;
                prev = mode
            }
            mode = 0;
            count = 0;
        }
    }
    return prev;
}
