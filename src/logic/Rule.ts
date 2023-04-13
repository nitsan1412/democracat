import { Applier, DefaultApplier, ICharacter, ICharacterType, Impact } from "../contracts";
import { rules } from "./Game-Settings";

export class Rule {
  constructor(
    public name: string,
    public info: string,
    impact: Impact,
    public isDelayed: boolean,
    public applier: Applier
  ) {
    this.applier = this.applier || new DefaultApplier(impact);
  }

  apply(characters: ICharacter[], characterTypes: ICharacterType[]) {
    return this.applier.apply(characters, characterTypes);
  }

  static RULES = rules.map((r) => {
    const { name, impact, info, isDelayed, apply } = r;
    return new Rule(name, info, impact, isDelayed, apply);
  });
}
