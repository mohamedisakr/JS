function fib(n) {
    let cache = new Map();
    let ans = 0;
    for (let k = 1; k <= n; k++) {
        if (k <= 2) { ans = 1 }
        else { ans = cache.get(k - 1) + cache.get(k - 2); }
        cache.set(k, ans);
    }
    return cache.get(n);
}

let num = 7;
let result = fib(num);
console.log(result);
