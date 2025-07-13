const palindromes = function (text) {
	let textSplit = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "").toLowerCase();
	let textReverse = textSplit.split("").reverse().join("");
	console.log(textSplit);
	console.log(textReverse);
	if (textSplit === textReverse) {
		return true;
	} else {
		return false;
	}
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
