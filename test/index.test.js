const expect = require('chai').expect;
const starWarsNames = require('../src/');

const isArrayOfStrings = arr => arr.every(item => typeof item === 'string');

describe('starwars-names', () => {
  describe('all()', () => {
    it('should be an array of strings', () => {
      expect(starWarsNames.all).to.satisfy(isArrayOfStrings);
    });

    it('should contain Luke Skywalker', () => {
      expect(starWarsNames.all).to.include('Luke Skywalker');
    });
  });

  describe('random()', () => {
    it('should return a random item from the .all()', () => {
      const randomName = starWarsNames.random();
      expect(starWarsNames.all).to.include(randomName);
    });
  });
});
