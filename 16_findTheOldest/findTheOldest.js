const findTheOldest = function(people) {

	let timeCurrentYear = new Date().getFullYear();

	for (const person of people) {

		let age;

		if (person.yearOfDeath === undefined) {
			age = timeCurrentYear - person.yearOfBirth;
		} else {
			age = person.yearOfDeath - person.yearOfBirth;
		}

		person.age = age;
	}

	people.sort((a, b) => b.age - a.age).splice(-2);

	return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
