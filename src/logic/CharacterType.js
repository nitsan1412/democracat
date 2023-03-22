export default class CharacterType {
  constructor ({ name, translation, initialScore = 0, initialSpeed = 1 }) {
    Object.assign(this, { name, translation, initialScore, initialSpeed, speed: initialSpeed })
  }

  changeSpeed (acceleration) {
    this.speed += acceleration
  }

  get gender () {
    return this.name.includes('woman') ? 'woman' : 'man'
  }

  get genderlessName () {
    return this.name.replace(`-${this.gender}`, '')
  }

  static characterTypes = () => [
    new CharacterType({ name: 'orthodox-man', translation: 'חרדי' }),
    new CharacterType({ name: 'orthodox-woman', translation: 'icon' }),
    new CharacterType({ name: 'arab-man', translation: 'ערבי' }),
    new CharacterType({ name: 'arab-woman', translation: 'ערביה' }),
    new CharacterType({ name: 'secular-man', translation: 'חילוני' }),
    new CharacterType({ name: 'secular-woman', translation: 'חילונית' }),
    new CharacterType({ name: 'religious-man', translation: 'דתי ציוני' }),
    new CharacterType({ name: 'religious-woman', translation: 'דתייה ציונית' })
  ]
}
