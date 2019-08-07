function greaterThanSum(a) {
    let ans = [a[0]];
    let s = a[0];
    let n = a.length;

    for (let i = 1; i < n; i++) {
        if (a[i] > s) { ans.push(a[i]); }
        s += a[i]
    }
    return ans;
}

const arr = [1, 2, 4, 8, 12, 32, 64, 128]; // [1, 2, 4, 8, 16, 32, 64, 128]; //[1, 2, 3, 6, 12, 24, 48, 96];
const ans = greaterThanSum(arr);
console.log(ans);

/*
function sumPreviousTerms(arr, val, lo, hi) {
    let s = 0;
    for (let k = lo; k <= hi; k++) {
        if (arr[k] < val) { s += arr[k]; }
        if (s === val) { return s; }
    }
    return s;
}
*/