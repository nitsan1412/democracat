import { DateTime } from "luxon";

export default class Score {
  constructor(charactersDoneArray, diversityTypes, characters, characterTypes) {
    Object.assign(this, {
      charactersDoneArray,
      diversityTypes,
      characterTypes,
      cuerrentScore: 0,
      bonusScore: 0,
    });
  }
  findScore(charactersDoneArray) {
    this.cuerrentScore = charactersDoneArray ? charactersDoneArray.length : 0;
    return this.cuerrentScore;
  }

  findBonusScore(characterTypes, diversityTypes) {
    let numberOfFinished = this.cuerrentScore;
    let bonusScore = numberOfFinished * characterTypes.length;
    let avg = (numberOfFinished / characterTypes.length).toFixed(0);
    for (const key in diversityTypes) {
      bonusScore -= Math.pow(avg - diversityTypes[key], 2);
    }
    this.bonusScore = bonusScore;
    Score.compairHighScore(this.bonusScore);
    return Math.max(bonusScore, 0);
  }

  static compairHighScore(newScore) {
    let currentHighest = localStorage.getItem("highest-score");
    if (currentHighest < newScore) {
      localStorage.removeItem("highest-score");
      localStorage.removeItem("highest-score-dateTime");
      localStorage.setItem("highest-score", newScore);
      localStorage.setItem(
        "highest-score-dateTime",
        DateTime.now().toFormat("dd.MM.yyyy")
      );
    }
  }
  getSummeryText(numberOfChosenRules) {
    if (numberOfChosenRules < 3) return Score.SUMMERY_TEXTS[0];
    const pointsIndex = Score.SUMMERY_TEXTS_POINTS_LIMIT.findIndex(
      (pointsLimit) => this.cuerrentScore < pointsLimit
    );
    const bonusIndex = Score.SUMMERY_TEXTS_BONUS_LIMIT.findIndex(
      (bonusLimit) => this.bonusScore < bonusLimit
    );
    return Score.SUMMERY_TEXTS[
      (pointsIndex
        ? pointsIndex
        : Score.SUMMERY_TEXTS_POINTS_LIMIT.length + 1) *
        (Score.SUMMERY_TEXTS_BONUS_LIMIT.length + 1) +
        (bonusIndex ? bonusIndex : Score.SUMMERY_TEXTS_BONUS_LIMIT.length + 1) +
        1
    ];
  }

  static SUMMERY_TEXTS_POINTS_LIMIT = [30, 55, 80];
  static SUMMERY_TEXTS_BONUS_LIMIT = [100, 200];

  static SUMMERY_TEXTS = [
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine: "כדי לקדם את חתוליך אתה צריך לאשר חוקים שעוזרים לאזרחים",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine:
        "נראה לי שאפשר יותר טוב. כדאי גם לדאוג לכל המגזרים. רוצה לשחק שוב?",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו, אבל המגוון לא רע.",
      secondLine: "כדאי לנסות שוב. בטוח יהיה טוב יותר",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine: "אבל אתה פלורליסט אמיתי!",
    },
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
  ];
}
