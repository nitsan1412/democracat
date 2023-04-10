export default class Character {
  constructor({ type, location = 0, currentScore = 0 }) {
    Object.assign(this, {
      type,
      location,
      currentScore,
      xPosition: Math.random(),
    });
  }

  move(dt) {
    this.location = Math.max(this.location + this.type.speed * dt, 0);
  }

  static createCharacter(characterTypes) {
    const characterTypePercentages = Object.fromEntries(
      Object.entries(Character.CHARACTER_TYPE_PRECENTAGES).filter(([key]) =>
        characterTypes.some((type) => type.name.includes(key))
      )
    );
    let rulletePointer =
      Math.random() *
      Object.values(characterTypePercentages).reduce((sum, x) => sum + x, 0);
    const gender = Math.random() > 0.5 ? "man" : "woman";
    const characterTypefound = Object.keys(characterTypePercentages).find(
      (type) => {
        const precetage = characterTypePercentages[type];
        if (rulletePointer <= precetage) {
          return true;
        } else {
          rulletePointer = rulletePointer - precetage;
          return false;
        }
      }
    );

    return new Character({
      type: characterTypes.find(
        (item) => item.name === `${characterTypefound}-${gender}`
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
