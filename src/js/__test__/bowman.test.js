import Bowman from '../bowman';

test('Must correctly create Bowman character object', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    control: true,
  };
  expect(new Bowman('Test')).toEqual(expected);
});

test('Метод levelUP должен повышать level на 1, attack и defence на 20% и health = 100', () => {
  const bowman = new Bowman('Test');
  bowman.health = 50;
  bowman.levelUP();
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
  expect(bowman.health).toBe(100);
});

test('Метод levelUP должен выбросить ошибку если health = 0', () => {
  const bowman = new Bowman('Test');
  bowman.health = 0;
  expect(() => bowman.levelUP()).toThrowError('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const bowman = new Bowman('Test');
  bowman.health = 0;
  bowman.damage(30);
  expect(bowman.health).toBe(0);
});

test('if health > 0 , output health must be correct', () => {
  const bowman = new Bowman('Test');
  bowman.damage(30);
  expect(bowman.health).toBe(77.5);
});

test('if health became negative, output health must be 0', () => {
  const bowman = new Bowman('Test');
  bowman.damage(200);
  expect(bowman.health).toBe(0);
});

test('свойство upProperties должно увеличивать показатели персонажа в 2 раза', () => {
  const bowman = new Bowman('Test');
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 200,
    level: 1,
    attack: 50,
    defence: 50,
    control: false,
  };
  expect(bowman.upProperties).toEqual(expected);
});

test('свойство upProperties должно увеличивать показатели персонажа только 1 раз', () => {
  const bowman = new Bowman('Test');
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 200,
    level: 1,
    attack: 50,
    defence: 50,
    control: false,
  };
  expect(bowman.upProperties).toEqual(expected);
  expect(bowman.upProperties).toEqual(bowman);
});
