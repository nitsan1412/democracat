import { useState, useEffect, useRef } from "react"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Slider from "react-slick";

import StartGameButton from "../StartGameButton"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import catKing from '../../images/icons/instructions/catKing.svg'
import catIcons from '../../images/icons/instructions/catIcons.svg'
import approveButton from '../../images/icons/instructions/approveButton.svg'
import declineButton from '../../images/icons/instructions/declineButton.svg'

export default function Instructions (props) {
  const [open, setOpen] = useState(false)
  const slider = useRef()

  const slides = [
    <Stack alignItems="center" gap={2}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>מי אני? מה אני?</Typography>
      <img src={catKing} alt="cat king" />
      <Typography variant="body1" sx={{ textAlign: "center" }}><b>ברכות!</b> נבחרת לשלוט במדינת החתולים אתם מחליטים אילו סוגי חתולים יגיעו אל כרית הצמר הנעימה</Typography>
    </Stack>,
    <Stack alignItems="center" gap={2}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>מה המטרה?</Typography>
      <img src={catIcons} alt="cat icons" />
      <Typography variant="body1" sx={{ textAlign: "center" }}>לפניכם 4 סוגי חתולים שרצים אל כרית הצמר, כל סוג חתול <b>מייצג חלק</b> מחברת החתולים</Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}><b>מטרה</b> היא להגיע עם המספר הרב ביותר של חתולים אל כרית הצמר, <b>על כל חתול</b> שהגיע אל הכרית תקבלו נקודה</Typography>
    </Stack>,
    <Stack alignItems="center" gap={2}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>איך משחקים?</Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>בעזרת <img src={approveButton} alt="approve" style={{ display: "inline", verticalAlign: "bottom" }} /> או <img src={declineButton} alt="decline" style={{ display: "inline", verticalAlign: "bottom" }} /> של חוקים תוכלו לקדם סוגי חתולים מסוימים ולעכב את האחרים</Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}><b>ויש גם בונוסים!</b></Typography>
      <Typography variant="body1" sx={{ textAlign: "center", marginTop: "-1rem" }}>תקבלו בונוס משמעותי על מגוון החתולים שיגיעו אל כרית הצמר</Typography>
      <StartGameButton />
    </Stack>
  ].reverse()

  // This is due to a bug with initialSlide property: manually moving to third slide
  useEffect(() => {
    if (!slider || !slider.current) return
    slider.current.slickGoTo(2, true)
  }, [slider])

  const PrevArrow = ({ className, style, onClick }) => <div style={{ background: '#474747', borderRadius: '100%', width: 35, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...{ className, onClick }}>
    <ArrowBackIcon sx={{ color: 'white' }} />
  </div>

  const NextArrow = ({ className, style, onClick }) => <div style={{ background: '#474747', borderRadius: '100%', width: 35, height: 35, display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...{ className, onClick }}>
    <ArrowForwardIcon sx={{ color: 'white' }} />
  </div>

  const Dots = ({ current }) => <Stack className="dots" direction="row-reverse" alignItems="center" justifyContent="center" gap={1}>
    {slides.map((slide, index) => index === current ? <CircleIcon /> : <RadioButtonUncheckedIcon />)}
  </Stack>

  return <>
    <Button {...props} onClick={() => setOpen(true)}>הוראות</Button>
    <Backdrop open={open} onClick={e => { if(e.currentTarget === e.target) setOpen(false) }} sx={styles}>
      <Slider ref={slider} swipeToSlide infinite={false} prevArrow={<PrevArrow />} nextArrow={<NextArrow />} style={{ width: '90vw' }} >
        {slides.map((slide, index) => <Paper elevation={2} sx={{ width: '90vw', padding: "2rem", paddingTop: "1rem" }}>
          <Typography color="primary" variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>הוראות המשחק</Typography>
          {slide}
          <Dots current={index} />
        </Paper>)}
      </Slider>
    </Backdrop>
  </>
}

const styles = {
  height: '100%',
  alignItems: "flex-start",
  paddingTop: "10vh",
  ".dots": {
    marginTop: "2rem",
    svg: { fontSize: "0.5rem" },
    "li:not(.slick-active) > :first-child": { display: "none" },
    "li.slick-active > :last-child": { display: "none" }
  },
  ".slick-prev": {
    left: 0,
    zIndex: 1,
    "::before": { content: 'unset' }
  },
  ".slick-next": {
    right: 0,
    zIndex: 1,
    "::before": { content: 'unset' }
  },
  ".slick-slide": { padding: "1rem" },
  ".slick-disabled": { display: "none !important" }
}
