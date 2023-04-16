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

    const characterGenderPercentages = Object.fromEntries(
      Object.entries(Character.CHARACTER_GENDER_PRECENTAGES).filter(([key]) =>
        characterTypes.some((type) => type.name.includes(key))
      )
    );

    const type = Character.rullete(characterTypePercentages);
    const gender = Character.rullete(characterGenderPercentages);

    return new Character({
      type: characterTypes.find((item) => item.name === `${type}-${gender}`),
    });
  }

  static rullete(percentages) {
    let rulletePointer =
      Math.random() * Object.values(percentages).reduce((sum, x) => sum + x, 0);
    return Object.keys(percentages).find((option) => {
      const precetage = percentages[option];
      if (rulletePointer <= precetage) {
        return true;
      } else {
        rulletePointer = rulletePointer - precetage;
        return false;
      }
    });
  }

  static CHARACTER_TYPE_PRECENTAGES = {
    secular: 25,
    religious: 25,
    orthodox: 25,
    arab: 25,
  };

  static CHARACTER_GENDER_PRECENTAGES = {
    man: 45,
    woman: 45,
    lgbt: 10,
  };
}
