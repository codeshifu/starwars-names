import starWarsNames from './starwars-names.json';
import unique from 'unique-random-array';

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
