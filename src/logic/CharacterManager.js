import Game from "./Game";
import CharacterType from "./CharacterType";
import Character from "./Character";

export default class CharacterManager {
  constructor(speed = 1) {
    this.characters = [];
    this.characterTypes = CharacterType.characterTypes(speed, false);
  }

  get charactersByType() {
    return Object.fromEntries(
      this.characterTypes.map((characterType) => [
        characterType.name,
        this._getCharactersOfType(characterType),
      ])
    );
  }

  get charactersByGenderlessType() {
    const genderlessCharacterTypeNames = this.characterTypes
      .map((type) => type.genderlessName)
      .filter((type, index, arr) => arr.indexOf(type) === index); // unique

    return Object.fromEntries(
      genderlessCharacterTypeNames.map((genderlessCharacterTypeName) => {
        const men = this._getCharactersOfType(
          `${genderlessCharacterTypeName}-man`
        );
        const women = this._getCharactersOfType(
          `${genderlessCharacterTypeName}-woman`
        );
        return [genderlessCharacterTypeName, men.concat(women)];
      })
    );
  }

  move() {
    this.characters
      .filter((charcter) => charcter.location < Game.TRACK_END)
      .forEach((charcter) => charcter.move(Game.STEP));
  }

  createCharacterWithProbability(charachterAdditionChance) {
    if (Math.random() <= charachterAdditionChance) {
      console.log("in if");
      this.characters.push(
        Character.createCharacter(
          this.characterTypes.filter((characterType) => !characterType.disabled)
        )
      );
    }
  }

  charactersDone() {
    return this.characters.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    );
  }

  charactersInPlay() {
    return this.characters.filter(
      (charcter) => charcter.location < Game.TRACK_END && charcter.location > 0
    );
  }

  diversityTypes() {
    const diversityMap =
      this.characterTypes &&
      Object.fromEntries(
        this.characterTypes.map((characterType) => [characterType.name, 0])
      );
    this.charactersDone()?.forEach((character) => {
      diversityMap[character.type.name]++;
    });
    return diversityMap;
  }

  _getCharactersOfType(characterType) {
    if (characterType.constructor === String) {
      characterType = this.characterTypes.find(
        (type) => type.name === characterType
      );
    }
    return this.characters.filter(
      (character) => character.type === characterType
    );
  }

  static CHARACTER_ADDITION_CHANCE = 0.05;
}
