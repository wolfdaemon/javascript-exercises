const add = function(y, z) {
	return y + z;
};

const subtract = function(y, z) {
	return y - z;
};

const sum = function(array) {
	const initialValue = 0;
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); // why is there a comma before `initialValue`, and how come that helps return a value (& namely, help "compute the sum of an empty array")
};

const multiply = function(array) {
	let i = 1;
	for (const arr of array) {
		i = i * arr;
	}
	return i;
};

const power = function(y, z) {
	let x = y;
	for (i = 1; i < z; i++) {
		x *= y;
	}
	return x;
};

const factorial = function(num) {
  let i = 1;
  while (num > 0) {
    i *= num;
    num--;
  }
  return i;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
