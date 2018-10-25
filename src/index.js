const starWarsNames = require('./starwars-names.json');
const unique = require('unique-random-array');

module.exports = {
  all: starWarsNames,
  random: unique(starWarsNames)
};
