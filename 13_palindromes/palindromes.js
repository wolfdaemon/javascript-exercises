const palindromes = function (text) {
	let textSplit = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "").toLowerCase();
	let textReverse = textSplit.split("").reverse().join("");
	if (textSplit === textReverse) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
