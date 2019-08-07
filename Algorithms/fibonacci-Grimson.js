// fibonacci using memoization by Prof. Grimson
function fib(n) {
    let cache = new Map(); //[[1, 1], [2, 1]]
    cache.set(1, 1);
    cache.set(2, 1);

    if (cache.has(n)) {
        return cache.get(n);
    } else {
        let ans = fib(n - 1) + fib(n - 2);
        cache.set(n, ans);
        return ans;
    }
}

for (let i = 1; i <= 34; i++) {
    document.write(`${i} : ${fib(i)}<br/>`);
}

// fibonacci without memoization
function fibslow(n) {
    if (n === 1) { return 1; }
    else if (n === 2) { return 1; }
    else { return fibslow(n - 1) + fibslow(n - 2); }
}

let n = 7; //4;
let ans = fibslow(n);
console.log(ans);