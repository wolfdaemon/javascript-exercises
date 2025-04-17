const removeFromArray = function(array, num, num2 = -1) {
	num = num - 1;
	array.splice(num, 1);

	if (num2 >= 0) {
		num2 = num2 - 1;
		array.splice(num2, 1);
	}
	
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
