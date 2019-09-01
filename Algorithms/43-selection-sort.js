function sort(a) {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }
        let temp = a[min];
        a[min] = a[i];
        a[i] = temp;
    }
    return a;
}
