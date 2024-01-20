const findTheOldest = function (people) {
  const date = new Date();

  //check if the person has no date of death, if not set it to the current year so we at least know their age
  for (let i = 0; i < people.length; i++) {
    if (people[i].hasOwnProperty("yearOfDeath") == false) {
      people[i].yearOfDeath = date.getFullYear();
    }
  }

  //we create a new array sorted by oldest
  const oldest = people.sort(function (a, b) {
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  });
  console.log(oldest[0]);
  //we return the oldest perons
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
