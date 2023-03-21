export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    if (type === 'Daemon') {
      this.health = 100;
      this.level = 1;
      this.attack = 40;
      this.defence = 10;
    }

    if (type === 'Zombie') {
      this.health = 90;
      this.level = 1;
      this.attack = 60;
      this.defence = 20;
    }

    if (type === 'Bowerman') {
      this.health = 80;
      this.level = 2;
      this.attack = 50;
      this.defence = 30;
    }
  }
}
