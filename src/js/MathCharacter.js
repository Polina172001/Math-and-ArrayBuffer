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
    // eslint-disable-next-line no-underscore-dangle
    this._basicAttack = value;
  }

  get basicAttack() {
    // eslint-disable-next-line no-underscore-dangle
    let lastAttack = ((100 - (this.distance - 1) * 10) / 100) * this._basicAttack;
    if (this.stoned) {
      lastAttack -= Math.log2(this.distance) * 5;
    }
    return lastAttack > 0 ? Math.round(lastAttack) : 0;
  }
}
