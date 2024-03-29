import { RuleDetails } from "../contracts";
import axios from "axios"
 let rules: RuleDetails[];

export const getRulesFromDb=()=>{
  axios.get('https://sheet.best/api/sheets/a6e67deb-2f00-43c3-89d3-b331341d53ed')
  .then(response => {
    console.log(response);
  })

  if (rules)return rules
  else return oldRules
}

export const oldRules: RuleDetails[] = [
  {
    id: 1,
    name: "חוק הצניעות",
    initialInfo: "מחייב הפרדה בין נשים לגברים כדי להעניק אופי צנוע למרחב הציבורי",
    summaryInfo: "החוק פוגע בחופש התנועה של נשים מכל המגזרים, למעט מהמגזר החרדי. לכן הן הופכות שקופות במרחב הציבורי.",
    impact: { orthodox: 1, "religious-woman":-1, "secular-woman":-1, "arab-woman":-1 },
    apply: { type: "Woman-Transparent", args: [{impact: { "orthodox-man": 1, "orthodox-woman": 1, "religious-woman":-1, "secular-woman":-1, "arab-woman":-1  }}] },
    isDelayed: true,
  },
  {
    id: 2,
    name: "חוק תורתם אמונתם",
    initialInfo: `פוטר את החרדים מגיוס לצה"ל כדי להעמיק את לימודי התורה`,
    summaryInfo: "החוק מפיל את נטל השירות הצבאי על חלק מהאוכלוסיה. הוא טוב לחרדים, פוגע במגזר החילוני ובמגזר הציוני הדתי ולא משפיע על המגזר הערבי שפטור מגיוס.",
    impact: { orthodox: 2, religious: -1, secular: -1, },
  },
  {
    id: 3,
    name: "חוק סמכויות בתי הדין הרבניים",
    initialInfo: `מרחיב את סמכויות בתי הדין הרבניים כך שישפטו בכל תחומי החיים בהתאם לחוקי ההלכה`,
    summaryInfo: "השיפוט לפי חוקי ההלכה נוטה לפסוק לטובת גברים. הוא פוגע בנשים מכל המגזרים ואינו משפיע על המגזר הערבי הנשפט בבתי הדין השרעיים.",
    impact: { "orthodox-man": 1, "religious-man":1, "secular-man":1, "orthodox-woman": -1, "religious-woman":-1, "secular-woman":-1, "orthodox-lgbt": -1, "religious-lgbt":-1, "secular-lgbt":-1},
  },
  {
    id: 4,
    name: "חוק שמירת השבת",
    initialInfo: `אוסר על יהודים לעבוד בעבודות ציבוריות בשבת`,
    summaryInfo: "החוק שומר על קדושת השבת אך פוגע בחופש העיסוק של המגזר החילוני. הוא טוב למגזר הערבי שיכול לעבוד בשבת ולמגזר החרדי.",
    impact: { arab: 2, orthodox:1, secular:-1},
  },
  {
    id: 5,
    name: "חוק המפלגות היהודיות",
    initialInfo: `אוסר על מפלגות איסלאמיות להתמודד בבחירות לכנסת`,
    summaryInfo: "החוק  מבסס את אופיה היהודי של הכנסת. הוא מונע ייצוג של המגזר הערבי ופוגע בו.",
    impact: { arab: -3, orthodox:1, secular:1, religious:1},
  },
  {
    id: 6,
    name: "חוק האיזוק האלקטרוני",
    initialInfo: `מגן על אנשים בסיכון על ידי ענידת אזיק אלקטרוני על אנשים אלימים`,
    summaryInfo: "החוק מסייע במיגור האלימות. הוא טוב לכולם ובעיקר לנשים מכל המגזרים.",
    impact: { "-woman": 3, "-man":1, "-lgbt":1},
  },
  {
    id: 7,
    name: "חוק בחירת השירות",
    initialInfo: `מאפשר לכל אזרח להחליט אם לשרת אדם על סמך נטייה פוליטית או מינית`,
    summaryInfo: "החוק מאפשר אפלייה של כל מגזר כנגד כל מגזר. הוא פוגע בכולם.",
    impact: { all: -1},
  },
  {
    id: 8,
    name: "חוק המילגות",
    initialInfo: `מעניק מילגות ליוצאי צבא`,
    summaryInfo: "החוק נותן יתרון לכל מי שעשה שירות צבאי. הוא טוב למגזר החילוני והציוני דתי.",
    impact: { secular:1, religious:1},
  },
  {
    id: 9,
    name: "חוק התחבורה הציבורית",
    initialInfo: `מאפשר הפעלת תחבורה ציבורית בשבת`,
    summaryInfo: "החוק מאפשר לאנשים לנסוע בכל ימות השבוע. הוא טוב לחילונים וערבים ולא מקובל על המגזר החרדי.",
    impact: { arab: 2, orthodox:-1, secular:2 },
  },
  {
    id: 10,
    name: "חוק הצבא היהודי",
    initialInfo: `נותן צביון יהודי לצבא על ידי הפרדה של שירות הבנים משירות הבנות`,
    summaryInfo: "החוק מקל על שומרי מצוות בעת השירות הצבאי, אך פוגע בשיוויון המגדרי. הוא טוב למגזר הציוני דתי ופוגע במגדר החילוני.",
    impact: { "orthodox-man": 1, "religious-man":1, "secular-man":-1, "secular-woman": -1 },
  },
  {
    id: 11,
    name: "חוק הורות נכונה",
    initialInfo: `לאפשר רישום הורות רק לגבר ואישה ולא לזוגות מאותו מין `,
    summaryInfo: `החוק קובע זהות משפחתית מסוג אחד בלבד. הוא טוב למגזר החרדי ופוגע במגדר הלהט"בי בכל המגזרים.`,
    impact: { "orthodox-man": 1, "orthodox-woman":1, "-lgbt": -2 },
  },
  {
    id: 12,
    name: "חוק הורות מורחב",
    initialInfo: `מאפשר לזוגות מאותו מין להביא ילדים לעולם מפונדקאית `,
    summaryInfo: `החוק מכיר במשפחות חד מיניות ומשווה את זכויותיהם למשפחות רגילות. הוא טוב ללהט"בים ופוגע ברגשות ציבור החרדי.`,
    impact: { "orthodox-man": -1, "orthodox-woman":-1, "-lgbt": 3 },
  },
  {
    id: 13,
    name: "חוק ההפלות",
    initialInfo: `מאפשר הפלות רק עם מניע המוגדר בחוק`,
    summaryInfo: `החוק מצמצם הפלות מיותרות אבל מונע מהאישה שליטה על גופה. החוק טוב למגזר החרדי, אבל פוגע בנשים מכל המגזרים וגם בגברים שיגדלו ילד לא רצוי`,
    impact: { "orthodox-man": 1, "orthodox-lgbt":1, "-woman": -3,  "arab-man": -1,  "secular-man": -1 },
  },
  {
    id: 14,
    name: "חוק בריאות הציבור",
    initialInfo: `מטיל מס על משקאות ממותקים`,
    summaryInfo: `החוק מוריד את צריכת משקאות עתירי סוכר. הוא תורם לבריאות כל המגזרים ופוגע כלכלית במגזר החרדי שצורך הרבה שתייה ממותקת.`,
    impact: { arab: 1, orthodox:-1, secular:1, religious:1},
  },
  {
    id: 15,
    name: "חוק קיימות",
    initialInfo: `מטיל מס על כלים חד פעמיים`,
    summaryInfo: `החוק מעודד שמירה על הסביבה. הוא טוב לכולם ופוגע במגזר החרדי בשל צריכה מרובה של כלים חד פעמיים.`,
    impact: { arab: 1, orthodox:-1, secular:1, religious:1},
  },
  {
    id: 16,
    name: "חוק האלכוהול",
    initialInfo: `אוסר על מכירה של אלכוהול במהלך חודש הרמאדן`,
    summaryInfo: `החוק מתחשב במוסלמים. הוא טוב למגזר הערבי ופוגע בכל יתר המגזרים.`,
    impact: { arab: 1, orthodox:-2, secular:-2, religious:-2},
  },
  {
    id: 17,
    name: "חוק החמץ",
    initialInfo: `אוסר על אכילת חמץ במהלך חג הפסח במרחב הציבורי`,
    summaryInfo: `החוק שומר על צביון יהודי. הוא טוב למגזר החרדי ולמגזר הציוני דתי ופוגע בכל יתר המגזרים.`,
    impact: { arab: -1, orthodox:1, secular:-1, religious:1},
  },
  {
    id: 18,
    name: "חוק איחוד הרשויות השופטות",
    initialInfo: `שומר על שיוויון בפני החוק על ידי מיזוג בתי הדין הרבניים לתוך האזרחיים ומאפשר שיפוט רק לפי החוק הישראלי`,
    summaryInfo: `העברת סמכויות השיפוט לבתי הדין האזרחיים יפגע בגברים חרדים ודתיים בגלל העדפתם להישפט בהתאם לחוקי ההלכה.`,
    impact: {"orthodox-man":-2, "religious-man":-2, secular:2, "orthodox-woman":1, "religious-woman":1, "orthodox-lgbt":1, "religious-lgbt":1},
  },
  {
    id: 19,
    name: "חוק העונשין לפגיעות מיניות",
    initialInfo: `מאריך את התקופה המותרת להגשת תלונה ל-25 שנים`,
    summaryInfo: `החוק מאפשר לקורבן התקיפה למצות את הדין עם התוקף גם אם חלפו שנים רבות. הוא טוב לנשים מכל המגזרים.`,
    impact: { "-woman": 1},
  },
  {
    id: 20,
    name: "חוק האם הישראלית",
    initialInfo: `מעודד נשים להישאר בבית על ידי הארכת חופשת הלידה לשנתיים`,
    summaryInfo: `החוק נותן מימון לחופשת לידה ארוכה לנשים. הוא טוב לנשים בכל המגזרים.`,
    impact: {"-woman":2 },
  },
  {
    id: 21,
    name: "חוק העבודה לאמהות",
    initialInfo: `החזרת אמהות למעגל העבודה על ידי צמצום חופשת הלידה`,
    summaryInfo: `החוק מקטין את חופשת הלידה לחודש וחצי ופוגע בנשים.`,
    impact: {"-woman":-1 },
  },
  {
    id: 22,
    name: "חוק חינוך חינם",
    initialInfo: `החוק מעגן תשלום למסגרות החינוך החל מגיל אפס`,
    summaryInfo: `החוק מעודד נשים לצאת לעבודה. הוא טוב לכולם.`,
    impact: {"-woman":2, "-man":1, "-lgbt":1 },
  },
  {
    id: 23,
    name: "חוק תקשורת",
    initialInfo: `מחייב לסגור ערוצי תקשורת ציבוריים כדי לחסוך בתקציב המדינה`,
    summaryInfo: `החוק פוגע בחופש הביטוי של כל המגזרים ולכן פיהם של כל החתולים נחסם.`,
    impact: { muted: 1 },
    apply: { type: "Muted" },
    isDelayed: true,
    icon:"muted",
  },
  {
    id: 24,
    name: "חוק השיוויון",
    initialInfo: `מבסס את השיוויון בפני החוק של כל המגזרים והמגדרים`,
    summaryInfo: `החוק מעגן את חוק השיוויון כחוק יסוד. לכן כל החתולים מתיישרים על קו אחד. הם ממשיכים במהירות שהיתה להם לפני קבלת החוק.`,
    impact: { all: 0 },
    apply: { type: "Average-Location" },
    isDelayed: true,
    icon:"equality",
  },
  {
    id: 25,
    name: "הצבעת אי אמון בממשלה",
    initialInfo: `מפיל את הממשלה`,
    summaryInfo: `ההצבעה מבטלת את כל החוקים שהתקבלו עד עכשיו. כל החתולים עוברים לנוע במהירות אחידה.`,
    impact: { all: 0 },
    apply: { type: "Reset" },
    isDelayed: true,
    icon:"refresh",

  },
  {
    id: 26,
    name: "חוק ביטול השבות",
    initialInfo: `מונע עלייה לארץ כדי להתמודד עם פיצוץ אוכלוסין`,
    summaryInfo: `החוק מונע עלייה של יהודים. הוא טוב למגזר הערבי ופוגע בכל שאר המגזרים.`,
    impact: { arab: 1, orthodox:-1, secular:-1, religious:-1},
  },
  {
    id: 27,
    name: "חוק למניעת התעללות",
    initialInfo: `מעודד אנשים לדווח על התעללות בחסרי ישע`,
    summaryInfo: `החוק מצמצם את תופעת ההתעללות. הוא טוב לכולם.`,
    impact: { all:1},
  },
  {
    id: 28,
    name: "חוק מניעת הסחיטה",
    initialInfo: `מרחיב את הגדרת הסחיטה כדי להילחם בפשע`,
    summaryInfo: `החוק מאפשר להעמיד לדין יותר סחטנים ומוריד את רמת הפשיעה. הוא טוב לכולם.`,
    impact: { all:1},
  },
  {
    id: 29,
    name: "חוק ההנגשה",
    initialInfo: `מנגיש את שירותי הממשלה על ידי שימוש בשפות נוספות`,
    summaryInfo: `החוק מקל על הציבור לקבל את הטיפול הנדרש במשרדי הממשלה. הוא טוב לכולם.`,
    impact: { all:1},
  },
  {
    id: 30,
    name: "חוק הפנסיה",
    initialInfo: `מאפשר לפנסיונרים לקבל קצבה מלאה ללא תלות בקבלת קצבה אחרת`,
    summaryInfo: `החוק מאפשר לפנסיונרים לחיות בכבוד. הוא טוב לכולם.`,
    impact: { all:1},
  },
  {
    id: 31,
    name: "חוק החינוך המיוחד",
    initialInfo: `מאפשר לילדים בעלי צרכים מיוחדים ללמוד בשפה שלהם במוסדות החינוך`,
    summaryInfo: `החוק מאפשר לילדים למצות את הפוטנציאל שלהם. הוא טוב לכולם.`,
    impact: { all:1},
  },
  {
    id: 32,
    name: "חוק לימודי ליבה",
    initialInfo: `מקדם את כלכלת המדינה על ידי לימודי ליבה`,
    summaryInfo: `החוק מרחיב את הידע וההשכלה במדינה ומאפשר פריחה כלכלית. הוא טוב לכל המגזרים מלבד החרדים שלא יקבלו תקצוב למוסדות שאין בהם לימודי ליבה.`,
    impact: { arab: 1, orthodox:-1, secular:1, religious:1},
  },
  {
    id: 33,
    name: "חוק הייצוג ההולם",
    initialInfo: `מקדם את התרבות בישראל על ידי ייצוג של חילוניים במשרד התרבות`,
    summaryInfo: `החוק מאפשר פריחה של תרבות חילונית. הוא טוב למגזר החילוני ופוגע בכל שאר המגזרים.`,
    impact: { arab: -1, orthodox:-1, secular:1, religious:-1},
  },

    
];

export const allCharacterTypes = [
  {
    name: "orthodox-man",
    translation: "חרדי",
  },
  {
    name: "orthodox-woman",
    translation: "חרדית",
  },
  {
    name: "orthodox-lgbt",
    translation: "להט\"ב חרד",
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
    name: "arab-lgbt",
    translation: "להט\"ב ערבי",
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
    name: "secular-lgbt",
    translation: "להט\"ב חילוני",
  },
  {
    name: "religious-man",
    translation: "דתי ציוני",
  },
  {
    name: "religious-woman",
    translation: "דתייה ציונית",
  },
  {
    name: "religious-lgbt",
    translation: "להט\"ב דתי ציוני",
  },
];
