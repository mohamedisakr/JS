function insert(item, a) {
    let n = a.length - 1;
    let lo = 0;
    let hi = n;

    if (item < a[lo]) {
        return lo;
    }
    if (item > a[hi]) {
        return hi + 1;
    }

    // let m = 0;
    while (hi > lo) {
        let m = Math.floor((lo + hi) / 2);
        if (item > a[m]) {
            lo = m + 1;
        } else {
            hi = m; 
        }
    }

    if (item <= a[lo]) {
        return lo;
    } else {
        return n - 1;
    }
}
