import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <div style={{ padding: "0rem 1rem" }}>
      <Typography variant="h4" sx={{ margin: 0, textAlign: "center" }}>
        <b> מיציטופיה</b>
      </Typography>
      <br></br>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        המשחק מיציטופיה פותח בעקבות המשבר החברתי בישראל בשנת 2023,
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        במסגרת הדמוקרטון ובתמיכת מכון זולת,
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        במטרה להדגיש את חשיבות הפלורליזם החברתי במדינה.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          margin: 0,
          textAlign: "justify",
          padding: "0 0.5rem",
          fontWeight: 700,
        }}
      >
        עבדו קשה, עמלו בפרך ולקחו חלק ביצירת פאר זו:{" "}
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        <b>מנהל הפרוייקט:</b> &nbsp;שמעון שטרק{" "}
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        <b>מתכנתים:</b>
        &nbsp;
        <a href="https://www.linkedin.com/in/nitsan-stark-levit/">
          {" "}
          ניצן שטרק לויט,
        </a>
        עידן שטרק, תומר שטרק{" "}
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        <b> מעצבות:</b>&nbsp; מאיה צימרמן ואמילי ברסלב{" "}
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        <b> מעצבות תוכן:</b>&nbsp; מירב שטרק ונטע שטרק{" "}
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        <b>טכנאי קול:</b>&nbsp; אלון קפלן
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        <b> עזרו, חיזקו, תרמו וייעצו:</b>&nbsp; מארגני ומשתתפי הדמוקרתון 2023,
        עמותת זול"ת, גארוגי אברמוביץ', דורי אדר, ורבים אחרים{" "}
      </Typography>
      <Typography
        variant="body2"
        sx={{ margin: 0, textAlign: "justify", padding: "0 0.5rem" }}
      >
        <b> ותודה במיוחד לכל מי שהגיב ועזר לשפר את המשחק</b>
      </Typography>
      <br></br>
    </div>
  );
}
