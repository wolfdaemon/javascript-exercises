const fibonacci = function(n) {
	n = Number(n);
	let seq = [0, 1];

	if (n < 0) {
		return "OOPS";
	}

	if (n <= 1) {
		return n;
	}

	for (i = 2; i <= n; i++) {
		let n1 = seq[i - 1];
		let n2 = seq[i - 2];
		let nNext = n1 + n2;
		seq.push(nNext);
	}

	let nPlace = n;
	return seq[nPlace];
}

// Do not edit below this line
module.exports = fibonacci;
