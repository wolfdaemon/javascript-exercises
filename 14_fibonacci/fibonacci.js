const fibonacci = function(num) {

	let arr = [ 1, 1 ];
	let numNext = 0;

	let numPrev = 1;
	let numPrevIndex = 0;

	let numPrev1 = 1;
	let numPrev1Index = 1;

	if (num < 0) {
		return "OOPS";
	}

	if (num == 0) {
		return numNext;
	}

	if (num == 1) {
		arr.push(numPrev);
		numNext = arr[0];
		arr.push(numNext);
		return numNext;
	}


	// num = 2
	for (let i = 1; i < num; i++) {
		numNext = arr[numPrevIndex] + arr[numPrev1Index]; // 2
		numPrevIndex++; // 0 
		numPrev1Index++; // 1
		arr.push(numNext);
	}
	return arr[numPrevIndex];
}

// node inspect tester (DELET when done)
fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
