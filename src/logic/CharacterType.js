import { allCharacterTypes } from "./Game-Settings";

export default class CharacterType {
  constructor({
    name,
    translation,
    initialScore = 0,
    initialSpeed = 1,
    donkey,
  }) {
    Object.assign(this, {
      name,
      translation,
      initialScore,
      initialSpeed,
      speed: initialSpeed,
      donkey: donkey || false,
    });
  }

  resetSpeed() {
    this.speed = this.initialSpeed;
  }

  changeSpeed(acceleration) {
    this.speed += acceleration;
  }

  changeImage(newImage) {
    if (newImage === "donkey") this.donkey = true;
    else this.donkey = false;
  }

  get gender() {
    return this.name.split("-")[1];
  }

  get genderlessName() {
    return this.name.split("-")[0];
  }

  static characterTypes = (speed, donkey) =>
    allCharacterTypes.map((c) => new CharacterType({ ...c, speed, donkey }));
}
