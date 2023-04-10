import { characters } from "./Game-Settings";

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
    return this.name.includes("woman") ? "woman" : "man";
  }

  get genderlessName() {
    return this.name.replace(`-${this.gender}`, "");
  }

  static characterTypes = (speed, donkey) =>
    characters.map((c) => new CharacterType({ ...c, speed, donkey }));
}
