const findTheOldest = function(people) {
	// people.map((peep) => peep.name);
	for (peep of people) {
		// if there is no "yearOfDeath" for a peep yet, then use the current year for the calcualion of their age
		if (people[peep].yearOfDeath == undefined) {
			people[peep].yearOfDeath = new Date().getFullYear();
		}

		people[peep].age = people[peep].yearOfDeath - people[peep].yearOfBirth; // define age of each peep

		// TODO: What I am having trouble with is understanding how exactly I'd compare all three (or more) "ages" at once, and then, after finding the highest numberical value of said age, finding out who is responsible for said age. Once I can do that and identify who, I can return the "who"'s name as a string.
		
	}

};

// Do not edit below this line
module.exports = findTheOldest;
