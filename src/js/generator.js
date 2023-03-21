import Character from './character';

export default class Team {
  constructor() {
    this.daemon = new Character('Daemon', 'Daemon');
    this.zombie = new Character('Zombie', 'Zombie');
    this.bowerman = new Character('Bowerman', 'Bowerman');
  }

  * [Symbol.iterator]() {
    const keys = Object.keys(this);

    for (let i = 0; i < keys.length; i += 1) {
      yield this[keys[i]];
    }
  }
}

const team = new Team();

for (const item of team) {
  console.log(item);
}
