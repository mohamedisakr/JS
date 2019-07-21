function generate(n) {
	let first = 2;
	let second = 0;
	console.log(first);
	for(let i = 1; i <= n; i++) {
		second = first + 3;
		console.log(second);
		first = second;
	}
}

generate(10);
