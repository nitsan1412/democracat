export default class Rule {
  constructor({ name, impact, apply, info }) {
    Object.assign(this, { name, impact, info });
    if (apply) {
      this.apply = apply;
    }
  }

  apply(characters, characterTypes) {
    Object.entries(this.impact).forEach(([filter, speedChange]) => {
      characterTypes
        .filter((characterType) => characterType.name.includes(filter))
        .forEach((characterType) => characterType.changeSpeed(speedChange));
    });

    return characters;
  }

  static RULES = [
    new Rule({
      name: "חוק תקשורת",
      info: "יללות אסורות בכל שעות היום והלילה.",
      impact: { donkey: 1 },
      apply: (characters, characterTypes) => {
        characterTypes.forEach((characterType) =>
          characterType.changeImage("donkey")
        );
        return characters;
      },
    }),
    new Rule({
      name: "חוק השיוויון",
      info: "כל החתולים מגיעים לעמק השווה",
      impact: { all: 0 },
      apply: (characters, characterTypes) => {
        const averageLocation =
          characters.reduce(
            (accumulator, currentValue) => accumulator + currentValue.location,
            0
          ) / characters.length;
        return characters.forEach(
          (character) => (character.location = averageLocation)
        );
      },
    }),
    new Rule({
      name: "הצבעת אי אמון בממשלה",
      info: "כל החתולים חוזרים להיות גורים קטנטנים וחמודים",
      impact: { all: 0 },
      apply: (characters, characterTypes) => {
        characterTypes.forEach((characterType) => characterType.resetSpeed());
        return characters;
      },
    }),
    new Rule({
      name: "חוק הסדרת הצייד",
      info: "חתולות יכולות לצאת לצוד רק בשעות היום, ובתנאי שיעשו זאת בשקט.",
      impact: { "-woman": -1, orthodox: 2, religious: 1 },
    }),
    new Rule({
      name: "חוק תרומות פרטיות",
      info: "קבלת אוכל מאנשים מותרת רק אם אתה דתי ציוני.",
      impact: { religious: 1 },
    }),
    new Rule({
      name: "חוק תקצוב מוסדות חינוך ללא ליבה",
      info: "גורי חתולים ילמדו להתחנן לאוכל מבני אדם. לימודי ליבה של ציד יהיה מחוץ לתחום.",
      impact: { orthodox: 1 },
    }),
    new Rule({
      name: "חוק סמכויות השופטים",
      info: "לחתול השופט החרדי יש סמכות לפסוק רק לטובת חתולים.",
      impact: { "-woman": -1 },
    }),
    new Rule({
      name: "חוק ביטול זכות בחירה לערבים",
      info: 'ביטול אפשרות הצייד תגרום לחתול הערבי להפוך לחתול בית וכך ניתן יהיה להעביר אותו למאמצים בחו"ל.',
      impact: { arab: -1 },
      apply: (characters, characterTypes) => {
        characterTypes
          .filter((characterType) => characterType.name.includes("arab"))
          .forEach((characterType) => {
            characterType.disabled = true;
          });
        return characters.filter(
          (character) => !character.type.name.includes("arab")
        );
      },
    }),
    new Rule({
      name: "חוק עבודה בשבת",
      info: "אסור לצוד בשבת אלא אם אתה חתול בית חילוני",
      impact: { secular: -1, orthodox: 1 },
    }),
    new Rule({
      name: "חוק הדרת נשים במרחב הציבורי",
      info: "נשים לא יופיעו על שלטי חוצות, לא תהיה שירת נשים באירועים ציבוריים",
      impact: { orthodox: 1, "-woman": -2 },
    }),
    new Rule({
      name: "חוק מלגות ליוצאי צבא",
      info: "כל משתחרר מהצבא יקבל הנחה ו/או מלגה ללימודים גבוהים במוסדות אקדמאים בארץ",
      impact: { secular: 1, religious: 1, orthodox: -1 },
    }),
    new Rule({
      name: "חוק אי-גיוס חרדים",
      info: "חרדים יקבלו פטור מגיוס צבאי",
      impact: { orthodox: 3 },
    }),
    new Rule({
      name: "אישור פונדקאות ללהטבים",
      info: "חוק המאפשר לחברי הקהילה הלהטבית לקיים הליך פונדקאות",
      impact: { "-LGTB": -2 },
    }),
    new Rule({
      name: "פסילת מפלגות ערביות",
      info: "מפלגות ערביות ייפסלו ולא יתאפשר להן לרוץ בבחירות לכנסת",
      impact: { arab: -2 },
    }),
    new Rule({
      name: "אי שיוויון בקבלת טיפול רפואי",
      info: "חוק המאפשר לבעלי מקצוע להפלות לקוחות או מטופלים על בסיס מגזר",
      impact: { arab: -1, orthodox: 1, secular: -1 },
    }),
    new Rule({
      name: "ביטול סמכויות בתי הדין הדתיים",
      info: "ניהול הדין האישי (נישואין, גירושין, רישום דת) על ידי בתי המשפט של המדינה",
      impact: { arab: -2, orthodox: -2, secular: 3 },
    }),
  ];
}
