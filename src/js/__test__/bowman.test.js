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

test('свойство upAttack должно увеличивать свойство attack в 2 раза', () => {
  const bowman = new Bowman('Test');
  expect(bowman.upAttack).toBe(50);
});

test('свойство upDefence должно увеличивать свойство defence в 2 раза', () => {
  const bowman = new Bowman('Test');
  expect(bowman.upDefence).toBe(50);
});

test('свойство upHealth должно увеличивать свойство health в 2 раза', () => {
  const bowman = new Bowman('Test');
  expect(bowman.upHealth).toBe(200);
});

test('свойство upAttack не должно увеличивать свойство attack', () => {
  const bowman = new Bowman('Test');
  bowman.powerMode = false;
  expect(bowman.upAttack).toBe(25);
});

test('свойство upDefence не должно увеличивать свойство defence', () => {
  const bowman = new Bowman('Test');
  bowman.powerMode = false;
  expect(bowman.upDefence).toBe(25);
});

test('свойство upHealth не должно увеличивать свойство health', () => {
  const bowman = new Bowman('Test');
  bowman.powerMode = false;
  expect(bowman.upHealth).toBe(100);
});
