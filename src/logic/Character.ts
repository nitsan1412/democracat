import CharacterType from "./CharacterType";

export default class Character {
  xPosition: number;
  constructor(public type: CharacterType, public location = 0, private currentScore = 0) {
    this.xPosition = Math.random();
  }

  move(dt: number) {
    this.location = Math.max(this.location + this.type.speed * dt, 0);
  }

  static createCharacter(characterTypes: CharacterType[]) {
    const characterTypePercentages = Object.fromEntries(
      Object.entries(Character.CHARACTER_TYPE_PRECENTAGES).filter(([key]) =>
        characterTypes.some((type) => type.name.includes(key))
      )
    );
    let rulletePointer: number =
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

    return new Character(
      characterTypes.find(
        (item) => item.name === `${characterTypefound}-${gender}`
      ) as CharacterType
    );
  }

  static CHARACTER_TYPE_PRECENTAGES = {
    secular: 25,
    religious: 25,
    orthodox: 25,
    arab: 25,
  };
}
