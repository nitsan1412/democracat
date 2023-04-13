export interface ICharacterType {
  name: string;
  gender: string;
  genderlessName: string;
  disabled: boolean;
  donkey: boolean;
  resetSpeed(): void;
  changeSpeed(acceleration: number): void;
  changeImage(newImage: string): void;
}
