export default class CharacterType {
  constructor({ name, translation, initialScore = 0, initialSpeed = 1 }) {
    Object.assign(this, {
      name,
      translation,
      initialScore,
      initialSpeed,
      speed: initialSpeed,
      donkey: false,
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

  static characterTypes = (speed) => [
    new CharacterType({
      name: "orthodox-man",
      translation: "חרדי",
      initialSpeed: speed,
    }),
    new CharacterType({
      name: "orthodox-woman",
      translation: "icon",
      initialSpeed: speed,
    }),
    new CharacterType({
      name: "arab-man",
      translation: "ערבי",
      initialSpeed: speed,
    }),
    new CharacterType({
      name: "arab-woman",
      translation: "ערביה",
      initialSpeed: speed,
    }),
    new CharacterType({
      name: "secular-man",
      translation: "חילוני",
      initialSpeed: speed,
    }),
    new CharacterType({
      name: "secular-woman",
      translation: "חילונית",
      initialSpeed: speed,
    }),
    new CharacterType({
      name: "religious-man",
      translation: "דתי ציוני",
      initialSpeed: speed,
    }),
    new CharacterType({
      name: "religious-woman",
      translation: "דתייה ציונית",
      initialSpeed: speed,
    }),
  ];
}
