const sumAll = function(x,y) {
	let z = 0;

	if (x < 0 || y < 0) { 
		return "ERROR";
	} else if (!Number.isInteger(x) || !Number.isInteger(y)) { // if numbers non-integer 
		return "ERROR";
	} else if (!typeof x === "number" || !typeof y === "number") {
		return "ERROR";
	} else if (x < y) {
		for (i = x; i <= y; i++) {
			z += i;
		}
		return z;
	} else if (x > y) {
		for (i = y; i <= x; i++) {
			z += i;
		}
		return z;
	} else {
		return "ERROR";
	}

};

// Do not edit below this line
module.exports = sumAll;
