const removeFromArray = function(array, num, num2 = -1) {
	num = num - 1;
	array.splice(num, 1);

	if (num2 >= 0) {
	//	num2 = num2 - 1;
	//	array.splice(num2, ...arguments);
		array2 = array.filter((num2) => num2 != num2);
	}

	// in order to remove multiples of the same value within an array, we probably need to implement a loop somewhere.
	// there also might need to be an implementation with regard to the spread syntax [...] that was mentioned in the README file.
	// TODO: Look at the spread syntax and perhaps implement it into the loop.
	//
	//
	// NOTE: I"m onto something with the filter() method. We can use filter() to "filter" out multiple indexes that don't meet a certain requirement, so we probably need to use that to fulfill "filtering" out entries of the same value. I am just not sure how exactly to implement this into a condition properly. I suspect that I need to create another variable to separate the value of the actual index versus the index of the actual value.
	
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
