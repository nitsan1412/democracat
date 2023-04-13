export const rules = [
  {
    name: "חוק תקשורת",
    info: "יללות אסורות בכל שעות היום והלילה.",
    impact: { donkey: 1 },
    apply: { type: "donkey" },
    isDelayed: true,
  },
  {
    name: "חוק השיוויון",
    info: "כל החתולים מגיעים לעמק השווה",
    impact: { all: 0 },
    apply: { type: "average-loc" },
    isDelayed: true,
  },
  {
    name: "הצבעת אי אמון בממשלה",
    info: "כל החתולים חוזרים להיות גורים קטנטנים וחמודים",
    impact: { all: 0 },
    apply: { type: "reset" },
    isDelayed: true,
  },
  {
    name: "חוק הסדרת הצייד",
    info: "חתולות יכולות לצאת לצוד רק בשעות היום, ובתנאי שיעשו זאת בשקט.",
    impact: { "-woman": -1, orthodox: 2, religious: 1 },
    isDelayed: false,
  },
  {
    name: "חוק תרומות פרטיות",
    info: "קבלת אוכל מאנשים מותרת רק אם אתה דתי ציוני.",
    impact: { religious: 1 },
    isDelayed: false,
  },
  {
    name: "חוק תקצוב מוסדות חינוך ללא ליבה",
    info: "גורי חתולים ילמדו להתחנן לאוכל מבני אדם. לימודי ליבה של ציד יהיה מחוץ לתחום.",
    impact: { orthodox: 1 },
    isDelayed: false,
  },
  {
    name: "חוק סמכויות השופטים",
    info: "לחתול השופט החרדי יש סמכות לפסוק רק לטובת חתולים.",
    impact: { "-woman": -1 },
    isDelayed: false,
  },
  {
    name: "חוק ביטול זכות בחירה לערבים",
    info: 'ביטול אפשרות הצייד תגרום לחתול הערבי להפוך לחתול בית וכך ניתן יהיה להעביר אותו למאמצים בחו"ל.',
    impact: { arab: -1 },
    apply: { type: "disable", args: ["arab"] },
    isDelayed: false,
  },
  {
    name: "חוק עבודה בשבת",
    info: "אסור לצוד בשבת אלא אם אתה חתול בית חילוני",
    impact: { secular: -1, orthodox: 1 },
    isDelayed: false,
  },
  {
    name: "חוק הדרת נשים במרחב הציבורי",
    info: "נשים לא יופיעו על שלטי חוצות, לא תהיה שירת נשים באירועים ציבוריים",
    impact: { orthodox: 1, "-woman": -2 },
    isDelayed: false,
  },
  {
    name: "חוק מלגות ליוצאי צבא",
    info: "כל משתחרר מהצבא יקבל הנחה ו/או מלגה ללימודים גבוהים במוסדות אקדמאים בארץ",
    impact: { secular: 1, religious: 1, orthodox: -1 },
    isDelayed: false,
  },
  {
    name: "חוק אי-גיוס חרדים",
    info: "חרדים יקבלו פטור מגיוס צבאי",
    impact: { orthodox: 3 },
    isDelayed: false,
  },
  {
    name: "אישור פונדקאות ללהטבים",
    info: "חוק המאפשר לחברי הקהילה הלהטבית לקיים הליך פונדקאות",
    impact: { "-LGTB": -2 },
    isDelayed: false,
  },
  {
    name: "פסילת מפלגות ערביות",
    info: "מפלגות ערביות ייפסלו ולא יתאפשר להן לרוץ בבחירות לכנסת",
    impact: { arab: -2 },
    isDelayed: false,
  },
  {
    name: "אי שיוויון בקבלת טיפול רפואי",
    info: "חוק המאפשר לבעלי מקצוע להפלות לקוחות או מטופלים על בסיס מגזר",
    impact: { arab: -1, orthodox: 1, secular: -1 },
    isDelayed: false,
  },
  {
    name: "ביטול סמכויות בתי הדין הדתיים",
    info: "ניהול הדין האישי (נישואין, גירושין, רישום דת) על ידי בתי המשפט של המדינה",
    impact: { arab: -2, orthodox: -2, secular: 3 },
    isDelayed: false,
  },
];

export const allCharacterTypes = [
  {
    name: "orthodox-man",
    translation: "חרדי",
  },
  {
    name: "orthodox-woman",
    translation: "icon",
  },
  {
    name: "arab-man",
    translation: "ערבי",
  },
  {
    name: "arab-woman",
    translation: "ערביה",
  },
  {
    name: "secular-man",
    translation: "חילוני",
  },
  {
    name: "secular-woman",
    translation: "חילונית",
  },
  {
    name: "religious-man",
    translation: "דתי ציוני",
  },
  {
    name: "religious-woman",
    translation: "דתייה ציונית",
  },
];