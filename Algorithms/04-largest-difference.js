function getLargestDifference(a) {
    let max = a[1] - a[0];
    for (let i = 2; i < a.length; i++) {
        let diff = (Math.abs(a[i] - a[i - 1]));
        if (max < diff) { max = diff; }
    }
    return max;
}

let a = [1, 9, 20, 100, 43, 12, 34];
let max = getLargestDifference(a);