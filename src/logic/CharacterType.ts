import { allCharacterTypes } from "./Game-Settings";

export default class CharacterType {
  speed: number;
  disabled: boolean = false;

  constructor(
    public name: string,
    private translation: string,
    private initialScore = 0,
    private initialSpeed = 1,
    public muted = false
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
    if (newImage === "muted") this.muted = true;
    else this.muted = false;
  }

  get gender() {
    return this.name.split("-")[1];
  }

  get genderlessName() {
    return this.name.split("-")[0];
  }

  static characterTypes = (speed: number, muted: boolean) =>
    allCharacterTypes.map(
      (c) => new CharacterType(c.name, c.translation, 0, speed, muted)
    );
}
