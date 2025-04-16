const reverseString = function(string) {
	let string2 = ""; // define for the scope of the function (return statement)
	
	for (let i = string.length - 1; i >= 0; i--) {
		string2 += string[i];
	}

	return string2;
};

// Do not edit below this line
module.exports = reverseString;
