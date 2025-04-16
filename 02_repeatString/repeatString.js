const repeatString = function(string, number) {
	if (number < 0) {
		return "ERROR";
	} else {
		let string2 = "";
		for (i = 0; i < number; i++) {
			string2 += string;
		}
		string = string2;
		return string;
	}
}

// Do not edit below this line
module.exports = repeatString;
