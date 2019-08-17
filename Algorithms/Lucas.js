let cache = new Map();

function lucas(n){
	// Check if n in cache
	if(cache.has(n)) { 		return cache.get(n); 	}

	// Compute the Nth term
	if(n === 1) { val = 1; }
	else if (n === 2) { val = 3; }
	else if (n > 2) { val = lucas(n - 1) + lucas(n - 2);}

	// Cache the value and return it
	cache.set(n, val);
	return val;
}


for(let i = 1; i <= 10; i++){
	console.log(i + " : " + lucas(i));
}
