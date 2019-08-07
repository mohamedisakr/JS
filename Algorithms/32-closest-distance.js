// a) a brute force algorithm that finds the distance between every pair of these numbers.
/*
let a = [10, 2, 4, 1, 7];
const n = a.length - 1;
let min = 1000000;

for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
        let val = Math.abs(a[i] - a[j]);
        if (val < min) {
            min = val;
        }
    }
}

console.log(min);
*/

// b) sorting the numbers and computing the least number of distances needed to solve the problem.
let a = [10, 2, 4, 1, 7];
let sorted = a.sort((a, b) => a - b);
const n = sorted.length - 1;
let min = 1000000;
for (let i = 1; i < n; i++) {
    let val = Math.abs(a[i] - a[i - 1]);
    if (min > val) { min = val; }
}
console.log(min);
