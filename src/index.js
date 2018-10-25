const starWarsNames = require('./starwars-names.json');
const unique = require('unique-random-array');

const getRandomItem = count => {
  if (count) {
    let randomItems = [];
    for (let i = 0; i < count; i++) {
      randomItems.push(unique(starWarsNames)());
    }
    return randomItems;
  }
  return unique(starWarsNames)();
};

module.exports = {
  all: starWarsNames,
  random: getRandomItem
};
