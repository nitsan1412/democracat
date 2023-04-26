import Game from "./Game";
import CharacterType from "./CharacterType";
import Character from "./Character";

export default class CharacterManager {
  characters: Character[];
  characterTypes: CharacterType[];
  catFinishedNow: boolean;

  constructor(speed = 1) {
    this.characters = [];
    this.characterTypes = CharacterType.characterTypes(speed, false);
    this.catFinishedNow = false;
  }

  get charactersByType() {
    return Object.fromEntries(
      this.characterTypes.map((characterType) => [
        characterType.name,
        this.getCharactersOfType(characterType),
      ])
    );
  }

  private get charactersByGenderlessType() {
    const genderlessCharacterTypeNames = this.characterTypes
      .map((type) => type.genderlessName)
      .filter((type, index, arr) => arr.indexOf(type) === index); // unique

    return Object.fromEntries(
      genderlessCharacterTypeNames.map((genderlessCharacterTypeName) => {
        const men = this.getCharactersOfType(
          `${genderlessCharacterTypeName}-man`
        );
        const women = this.getCharactersOfType(
          `${genderlessCharacterTypeName}-woman`
        );
        return [genderlessCharacterTypeName, men.concat(women)];
      })
    );
  }

  move() {
    
    let previousDoneCats = this.charactersDone().length
    this.catFinishedNow = false
     this.characters
      .filter((charcter) => charcter.location < Game.TRACK_END)
      .forEach((charcter) =>charcter.move(Game.STEP));
   if (this.charactersDone().length !== previousDoneCats){
    this.catFinishedNow = true;
    
   }else {
    this.catFinishedNow = false;
   }
  }

 
  createCharacterWithProbability(charachterAdditionChance: number) {
    let currentChance =  this.characters.length>3 ? charachterAdditionChance : 0.1
    if (Math.random() <= currentChance) {
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

  private getCharactersOfType(characterType: string | CharacterType) {
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
