const palindromes = function (string) {
	stringArray = Array.from(string);
	stringReverse = stringArray.reverse().join("");

	if (string === stringReverse) {
		return true;
	}
};

// Do not edit below this line
module.exports = palindromes;
