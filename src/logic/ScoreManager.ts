import { DateTime } from "luxon";
import Character from "./Character";
import CharacterType from "./CharacterType";
import { SummayText } from "../contracts/SummayText";

export class ScoreManager {
  calculateScore(charactersDoneArray: Character[]): number {
    return charactersDoneArray ? charactersDoneArray.length : 0;
  }

  calculateBonusScore(
    charactersDoneArray: Character[],
    characterTypes: CharacterType[],
    diversityTypes: {
      [name: string]: number;
    }
  ) {
    if (charactersDoneArray.length === 0) return 0;
    const numberOfFinished = this.calculateScore(charactersDoneArray);
    let bonusScore = numberOfFinished * characterTypes.length;
    const avg = Math.floor((numberOfFinished / characterTypes.length));
    for (const key in diversityTypes) {
      bonusScore -= Math.pow(avg - diversityTypes[key], 2);
    }
    ScoreManager.compairHighScore(bonusScore + numberOfFinished);
    return Math.max(bonusScore, 0);
  }

  static compairHighScore(newScore: number) {
    const currentHighest = +localStorage.getItem("highest-score");
    if (!currentHighest) {
      localStorage.setItem("highest-score", `${newScore}`);
      localStorage.setItem(
        "highest-score-dateTime",
        DateTime.now().toFormat("dd.MM.yyyy")
      );
    } else if (currentHighest < newScore) {
      localStorage.removeItem("highest-score");
      localStorage.removeItem("highest-score-dateTime");
      localStorage.setItem("highest-score", `${newScore}`);
      localStorage.setItem(
        "highest-score-dateTime",
        DateTime.now().toFormat("dd.MM.yyyy")
      );
    }
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

  static SUMMARY_TEXTS_SCORE_LIMIT = [30, 60, 100];
  static SUMMARY_TEXTS_BONUS_LIMIT = [200, 350];

  static SUMMARY_TEXTS = [
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine: "כדי לקדם את חתוליך אתה צריך לאשר חוקים שעוזרים לאזרחים",
    },
    [
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
        secondLine:
          "נראה לי שאפשר יותר טוב. כדאי גם לדאוג לכל המגזרים.",
      },
      {
        firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו, אבל המגוון לא רע.",
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
        firstLine: "בתור שליט מדינת החתולים הצלחת בסדר, והמגוון לא רע. ",
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
          "וואוו ! הצלחת ממש יפה בתור שליט מדינת החתולים, אבל המגוון לא משהו.",
        secondLine: "כדאי לדאוג לכל המגזרים.",
      },
      {
        firstLine:
          "וואוו ! הצלחת ממש יפה בתור שליט מדינת החתולים, וגם המגוון לא רע.",
        secondLine: "שווה לשתף את התוצאה",
      },
      {
        firstLine: "וואוו ! הצלחת ממש יפה בתור שליט מדינת החתולים.",
        secondLine: "אתה פלורליסט אמיתי! שיתפת?",
      },
    ],
    [
      {
        firstLine:
          "וואוו ! כל הכבוד!!! אין שליט מדינת החתולים טוב כמוך בעולם כולו! אבל המגוון לא מספיק טוב.",
        secondLine: "כדאי לדאוג לכל המגזרים.",
      },
      {
        firstLine:
          "וואוו ! כל הכבוד!!! אין שליט מדינת החתולים טוב כמוך בעולם כולו! וגם המגוון לא רע.",
        secondLine: "שווה לשתף את התוצאה",
      },
      {
        firstLine:
          "וואוו ! כל הכבוד!!! אין שליט מדינת החתולים טוב כמוך בעולם כולו! וגם המגוון מעולה!.",
        secondLine: "אתה פלורליסט אמיתי! שיתפת?",
      },
    ],
  ];
}
