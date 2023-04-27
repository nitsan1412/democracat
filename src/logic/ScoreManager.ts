import { DateTime } from "luxon";
import Character from "./Character";
import { SummayText } from "../contracts/SummayText";

export class ScoreManager {
  calculateScore(charactersDoneArray: Character[]): number {
    return charactersDoneArray ? charactersDoneArray.length : 0;
  }

  calculateBonusScore(charactersDoneArray: Character[]) {
    if (charactersDoneArray.length === 0) return 0;
    const numberOfFinished = charactersDoneArray.length;
    const initialBonus = numberOfFinished * 2;
    let sumOfSquares = 0
    ScoreManager.GENDERS.forEach((gender) => {
      const doneOfGenderPrecentage =
        (charactersDoneArray.filter((character) =>
          character.type.name.includes(gender)
        ).length /
          numberOfFinished) *
        100;
      const PrecentageDifference = Math.pow(
        Math.floor(
          +Character.CHARACTER_GENDER_PRECENTAGES[`${gender}`] -
            doneOfGenderPrecentage
        )
      , 2);
      sumOfSquares += (PrecentageDifference / 100) * numberOfFinished;
    });
    ScoreManager.SECTORS.forEach((sector) => {
      const doneOfSectorPrecentage =
        (charactersDoneArray.filter((character) =>
          character.type.name.includes(sector)
        ).length /
          numberOfFinished) *
        100;
      const PrecentageDifference = Math.pow(
        Math.floor(
          +Character.CHARACTER_TYPE_PRECENTAGES[`${sector}`] -
            doneOfSectorPrecentage
        )
      , 2);
      sumOfSquares += (PrecentageDifference / 100) * numberOfFinished;
    });
    return Math.max(Math.round(initialBonus - Math.sqrt(sumOfSquares)), 0);
  }

  static compairHighScore(newScore: number) {
    const currentHighest = Number(localStorage.getItem("highest-score")) 
    if (!currentHighest) {
      localStorage.setItem("highest-score", `${newScore}`);
      localStorage.setItem(
        "highest-score-dateTime",
        DateTime.now().toFormat("dd.MM.yyyy")
      );
      return true
    } else if (currentHighest < newScore) {
      localStorage.setItem("highest-score", `${newScore}`);
      localStorage.setItem(
        "highest-score-dateTime",
        DateTime.now().toFormat("dd.MM.yyyy")
      );
      return true
    } else return false
  }
  getSummaryText(
    numberOfChosenRules: number,
    score: number,
    bonusScore: number
  ): SummayText | SummayText[] {
    if (numberOfChosenRules < 3) return ScoreManager.SUMMARY_TEXTS[0];
    let scoreIndex = ScoreManager.SUMMARY_TEXTS_SCORE_LIMIT.findIndex(
      (scoreLimit) => score <= scoreLimit
    );
    if (scoreIndex === -1)
      scoreIndex = ScoreManager.SUMMARY_TEXTS_SCORE_LIMIT.length;
    let bonusIndex = ScoreManager.SUMMARY_TEXTS_BONUS_LIMIT.findIndex(
      (bonusLimit) => bonusScore <= bonusLimit
    );
    if (bonusIndex === -1)
      bonusIndex = ScoreManager.SUMMARY_TEXTS_BONUS_LIMIT.length;

    return ScoreManager.SUMMARY_TEXTS[scoreIndex + 1][bonusIndex];
  }

  static SUMMARY_TEXTS_SCORE_LIMIT = [40, 60, 80];
  static SUMMARY_TEXTS_BONUS_LIMIT = [40, 61];
  static GENDERS = ["man", "woman", "lgbt"];
  static SECTORS = ["orthodox", "arab", "secular", "religious"];

  static SUMMARY_TEXTS = [
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine: "כדי לקדם את חתוליך אתה צריך לאשר חוקים שעוזרים לאזרחים",
    },
    [
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
        secondLine: "נראה לי שאפשר יותר טוב. כדאי גם לדאוג לכל המגזרים.",
      },
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו, אבל המגוון די טוב.",
        secondLine: "כדאי לנסות שוב. בטוח יהיה טוב יותר",
      },
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
        secondLine: "אבל אתה פלורליסט אמיתי!",
      },
    ],
    [
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת בסדר, אבל המגוון לא משהו. ",
        secondLine: "בטוח שאפשר לשפר",
      },
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת בסדר, וגם המגוון די טוב. ",
        secondLine: "אבל בטוח שאפשר לשפר.",
      },
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת בסדר, אבל המגוון מדהים.",
        secondLine: "אתה פלורליסט אמיתי!",
      },
    ],
    [
      {
        firstLine:
          "וואוו ! הצלחת ממש יפה, אבל המגוון לא משהו.",
        secondLine: "כדאי לדאוג לכל המגזרים.",
      },
      {
        firstLine:
          "וואוו ! הצלחת ממש יפה, וגם המגוון די טוב.",
        secondLine: "שווה לשתף את התוצאה",
      },
      {
        firstLine: "וואוו ! הצלחת ממש יפה.",
        secondLine: "אתה פלורליסט אמיתי! שיתפת?",
      },
    ],
    [
      {
        firstLine:
          "כל הכבוד! אין כמוך! אבל המגוון לא מספיק טוב.",
        secondLine: "כדאי לנסות שוב.",
      },
      {
        firstLine:
          "כל הכבוד! אין כמוך! וגם המגוון די טוב.",
        secondLine: "שווה לשתף את התוצאה",
      },
      {
        firstLine:
        "כל הכבוד! אין כמוך!",
        secondLine: "אתה פלורליסט אמיתי! שיתפת?",
      },
    ],
  ];
}
