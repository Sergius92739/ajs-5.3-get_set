import Character from '../character';

test('Must correctly create an object of the base class', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    control: true,
  };
  expect(new Character('Test', 'Bowman')).toEqual(expected);
});

test('if name is not a string should throw an error', () => {
  expect(() => new Character(1, 'Bowman')).toThrowError('The name must be a string');
});

test('if the name is not between 2 and 10 characters should throw error', () => {
  expect(() => new Character('T', 'Bowman')).toThrowError('The name must be between 2 and 10 characters!');
  expect(() => new Character('abracadabra')).toThrowError('The name must be between 2 and 10 characters!');
});

test('if the character is not on the list, throws an error', () => {
  expect(() => new Character('abracad')).toThrowError('The type must be selected from the list of suggested types!');
});
