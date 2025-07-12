const add = function(num, num1) {
	return num + num1;
};

const subtract = function(num, num1) {
	return num - num1;
};

const sum = function(arr) {
	return arr.reduce((accumulator, element) => { return accumulator + element }, 0);
};

const multiply = function(arr) {
	return arr.reduce((acc, item) => { return acc * item });
};

const power = function(num, num1) {
	let arr = [];
	for (i = 0; i < num1; i++) {
		arr.push(num);
	}
	return arr.reduce((acc, item) => { return acc * item });
};

const factorial = function(num) {
	let arr = [];
	num = num + 1;
	for (i = 1; i < num; i++) {
		arr.push(i);
	}
	return arr.reduce((acc, item) => { return acc * item }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
