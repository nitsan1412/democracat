import { allCharacterTypes } from "./Game-Settings";

export default class CharacterType {
  speed: number;
  disabled: boolean = false;

  constructor(
    public name: string,
    private translation: string,
    private initialScore = 0,
    private initialSpeed = 1,
    public donkey = false
  ) {
    this.speed = initialSpeed;
  }

  resetSpeed() {
    this.speed = this.initialSpeed;
  }

  changeSpeed(acceleration: number) {
    this.speed += acceleration;
  }

  changeImage(newImage: string) {
    if (newImage === "donkey") {
      this.donkey = true;
    } else {
      this.donkey = false;
    }
  }

  get gender() {
    return this.name.includes("woman") ? "woman" : "man";
  }

  get genderlessName() {
    return this.name.replace(`-${this.gender}`, "");
  }

  static characterTypes = (speed: number, donkey: boolean) =>
    allCharacterTypes.map(
      (c) => new CharacterType(c.name, c.translation, 0, speed, donkey)
    );
}
