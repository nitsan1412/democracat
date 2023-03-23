export default class Character {
  constructor({ type, location = 0, currentScore = 0 }) {
    Object.assign(this, { type, location, currentScore });
  }

  move(dt) {
    this.location = Math.max(this.location + this.type.speed * dt, 0);
  }

  static createCharacter(characterTypes) {
    let rulletePointer =
      Math.random() *
      Object.values(Character.CHARACTER_TYPE_PRECENTAGES).reduce(
        (sum, x) => sum + x,
        0
      );
    let gender = Math.random() > 0.5 ? "man" : "woman";
    let characterTypefound = Object.entries(
      Character.CHARACTER_TYPE_PRECENTAGES
    ).find(([type, precetage]) => {
      if (rulletePointer <= precetage) {
        return true;
      } else {
        rulletePointer = rulletePointer - precetage;
        return false;
      }
    });
    return new Character({
      type: characterTypes.find(
        (item) => item.name === `${characterTypefound[0]}-${gender}`
      ),
    });
  }

  static CHARACTER_TYPE_PRECENTAGES = {
    secular: 25,
    religious: 25,
    orthodox: 25,
    arab: 25,
  };
}
