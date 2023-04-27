import { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StartGameButton from "../StartGameButton";

import catKing from "../../images/icons/instructions/catKing.svg";
import approveButton from "../../images/icons/instructions/approveButton.svg";
import declineButton from "../../images/icons/instructions/declineButton.svg";
import allCatsInInstructions from "../../images/icons/instructions/allCats.png";

export default function Instructions(props) {
  const [open, setOpen] = useState(false);
  const slider = useRef();

  const slides = [
    <Stack alignItems="center" gap={2}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        מי אני? מה אני?
      </Typography>
      <img src={catKing} alt="cat king" />
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marignBottom: "-1rem" }}
      >
        <b>ברכות</b>
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "-1rem" }}
      >
        נבחרת לשלוט במדינת מיציטופיה בה מתנהלת חברה פלורליסטית ולכל חתול יש קול{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      >
        ביכולתך להחליט אילו חתולים יגיעו אל כרית הצמר הנעימה{" "}
      </Typography>
      <Stack height="1rem"> </Stack>
    </Stack>,
    <Stack alignItems="center" gap={2}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        החתולים המשתתפים
      </Typography>
      <img src={allCatsInInstructions} alt="sector cats" />
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        החתולים מחולקים לארבעה מגזרים: חילוני, דתי-ציוני, חרדי וערבי
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "-1rem" }}
      >
        ושלושה מגדרים: זכר, נקבה ולהט"ב
      </Typography>
    </Stack>,
    <Stack alignItems="center" gap={2}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        איך משחקים?
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        המטרה היא להגיע עם המספר הרב ביותר של חתולים אל כרית הצמר בתוך שתי דקות{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          marginTop: "-0.5rem",
          marginBottom: "-0.5rem",
        }}
      >
        כל חתול מזכה אותך בנקודה{" "}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        תוכל לקדם חתולים מסויימים ולעכב אחרים{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "-1rem" }}
      >
        בעזרת אישור או דחייה של חוקים
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        <img
          src={approveButton}
          alt="approve"
          style={{ display: "inline", verticalAlign: "bottom" }}
        />{" "}
        <img
          src={declineButton}
          alt="decline"
          style={{ display: "inline", verticalAlign: "bottom" }}
        />{" "}
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        <b>ויש גם בונוס!</b>
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "-1rem" }}
      >
        שיחושב לפי ההצלחה להעביר מספר דומה של חתולים מכל מגדר ומגזר אל הכרית
      </Typography>
      <Stack
        sx={{ marginTop: "1.5rem", marginBottom: "0.6rem", width: "100%" }}
      >
        <StartGameButton />
      </Stack>
    </Stack>,
  ].reverse();

  // This is due to a bug with initialSlide property: manually moving to third slide
  useEffect(() => {
    if (!slider || !slider.current) return;
    slider.current.slickGoTo(2, true);
  }, [slider]);

  const PrevArrow = ({ className, style, onClick }) => (
    <div
      style={{
        background: "#474747",
        borderRadius: "100%",
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...{ className, onClick }}
    >
      <ArrowBackIcon sx={{ color: "white" }} />
    </div>
  );

  const NextArrow = ({ className, style, onClick }) => (
    <div
      style={{
        background: "#474747",
        borderRadius: "100%",
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...{ className, onClick }}
    >
      <ArrowForwardIcon sx={{ color: "white" }} />
    </div>
  );

  const Dots = ({ current }) => (
    <Stack
      className="dots"
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      {slides.map((slide, index) =>
        index === current ? (
          <CircleIcon key={index} />
        ) : (
          <RadioButtonUncheckedIcon key={index} />
        )
      )}
    </Stack>
  );

  return (
    <>
      <Button {...props} onClick={() => setOpen(true)}>
        הוראות
      </Button>
      <Backdrop
        open={open}
        onClick={(e) => {
          if (e.currentTarget === e.target) setOpen(false);
        }}
        sx={styles}
      >
        <Slider
          ref={slider}
          swipeToSlide
          infinite={false}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          style={{ width: "22rem" }}
        >
          {slides.map((slide, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                width: "90vw",
                height: "34rem",
                padding: "2rem",
                paddingTop: "1rem",
                marginTop: "1rem",
              }}
            >
              <Typography
                color="primary"
                variant="body1"
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                  // marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                הוראות המשחק
              </Typography>
              {slide}
              <Dots current={index} />
            </Paper>
          ))}
        </Slider>
      </Backdrop>
    </>
  );
}

const styles = {
  height: "100%",
  alignItems: "flex-start",
  paddingTop: "10vh",
  ".dots": {
    marginTop: "2rem",
    svg: { fontSize: "0.5rem" },
    "li:not(.slick-active) > :first-child": { display: "none" },
    "li.slick-active > :last-child": { display: "none" },
  },
  ".slick-prev": {
    left: 0,
    zIndex: 1,
    "::before": { content: "unset" },
  },
  ".slick-next": {
    right: 0,
    zIndex: 1,
    "::before": { content: "unset" },
  },
  ".slick-slide": { padding: "1rem" },
  ".slick-disabled": { display: "none !important" },
};
