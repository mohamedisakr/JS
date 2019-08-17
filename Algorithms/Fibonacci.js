let cache = new Map();

function fib(n) {
	// Check if n in cache
	if (cache.has(n)) {return cache.get(n);}

	// Compute the Nth term
	if(n === 1){ val = 1; }
	else if (n === 2){ val = 1; }
	else if (n > 2) { val = fib(n - 1) + fib(n - 2); }

	// Cache the value and return it
	cache.set(n, val);
	return val;
}

for(let i = 1; i <= 10; i++){
	console.log(i + " : " + fib(i));
}
