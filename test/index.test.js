import { expect } from 'chai';
import starWarsNames from '../src';

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

    it('should return an array of random items if passed a number', () => {
      const randomItems = starWarsNames.random(2);
      expect(randomItems).to.have.lengthOf(2);
      randomItems.forEach(item => expect(starWarsNames.all).to.include(item));
    });
  });
});
