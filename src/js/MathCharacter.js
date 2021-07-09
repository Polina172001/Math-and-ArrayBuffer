import Character from './app';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.state = false;
  }

  set stoned(value) {
    this.state = value;
  }

  get stoned() {
    return this.state;
  }

  set basicAttack(value) {
    this.basicAttack = value;
  }

  get basicAttack() {
    let lastAttack = ((100 - (this.distance - 1) * 10) / 100) * this.basicAttack;
    if (this.stoned) {
      lastAttack -= Math.log2(this.distance) * 5;
    }
    return lastAttack > 0 ? Math.round(lastAttack) : 0;
  }
}
