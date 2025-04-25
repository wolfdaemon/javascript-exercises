const sumAll = function(x,y) {
	let z = 0;

	if (x < y) {
		for (i = x; i <= y; i++) {
			z += i;
		}
		return z;
	} else if (x > y) {
		for (i = y; i <= x; i++) {
			z += i;
		}
		return z;
	} else if (x < 0 || y < 0) { // if numbers negative
		console.log("ERROR: Negative numbers");
	} else if ( ) // if numbers non-integer {

	}
};

// Do not edit below this line
module.exports = sumAll;
