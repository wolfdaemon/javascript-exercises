const palindromes = function (string) {

	let stringArray;
	let stringReverse;

	stringArray = string;


	if (string.indexOf(",") > -1) {
		stringArray = stringArray.split(",");
		stringArray = stringArray.join("");
		stringArray = stringArray.replace(/\s+/g, "");
	}

	if (string.indexOf("!") > -1) {
		stringArray = stringArray.split("!");
		stringArray.pop();
		stringArray = stringArray[0];
	}

	if (string.indexOf(".") > -1) {
		stringArray = stringArray.split(".");
		stringArray.pop();
		stringArray = stringArray[0];
	}

	stringArray = Array.from(stringArray);
	stringReverse = stringArray.reverse().join("").toLowerCase();
	stringArray = stringArray.reverse().join("").toLowerCase();

	stringArray = stringArray.replace(/\s+/g, "");
	stringReverse = stringReverse.replace(/\s+/g, "");

	if (stringArray === stringReverse) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
