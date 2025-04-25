/*
 * Celsius to Fahrenheit Formula: (°C * 1.8) + 32 = °F
 * Fahrenheit to Celsius Formula: (°F - 32) / 1.8 = °C
*/

const convertToCelsius = function(tempF) {
	tempC = (tempF - 32) / 1.8;
	tempC = Math.round(tempC * 10)/10;
	return tempC;
}

const convertToFahrenheit = function(tempC) {
	tempF = (tempC * 1.8) + 32;
	tempF = Math.round(tempF * 10)/10;
	return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
