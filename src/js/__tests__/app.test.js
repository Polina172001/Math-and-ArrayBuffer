import MathCharacter from '../MathCharacter';

test('check new MathCharacter', () => {
  const player = new MathCharacter('Polina', 'Daemon');
  const result = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Polina',
    type: 'Daemon',
    distance: 1,
    state: false,
  };

  expect(player).toEqual(result);
});

test('check getter with state true', () => {
  const player = new MathCharacter('Polina', 'Daemon');
  player.basicAttack = 10;
  player.stoned = true;

  expect(player.basicAttack).toBe(10);
});

test('check getter with state false', () => {
  const player = new MathCharacter('Polina', 'Magician');
  player.basicAttack = 10;

  expect(player.basicAttack).toBe(10);
});
