import { useState } from "react"
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Instructions (props) {
  const [open, setOpen] = useState(false)

  const slides = [
    <Typography>Slide 1</Typography>,
    <Typography>Slide 2</Typography>,
    <Typography>Slide 3</Typography>
  ]

  return <>
    <Button {...props} onClick={() => setOpen(true)}>הוראות</Button>
    <Backdrop open={open} onClick={() => setOpen(false)} sx={{ height: '100%', ".slick-dots": { bottom: "25px" }, ".slick-prev": { left: 0, zIndex: 1, "::before": { color: "black" } }, ".slick-next": { right: 0, zIndex: 1, "::before": { color: "black" } }, ".slick-slide": { padding: "1rem" } }}>
      <Slider slidesToShow={1} slidesToScroll={1} dots swipeToSlide style={{ width: '80vw', height: '60vh' }}>
        {slides.map(slide => <Paper sx={{ width: '80vw', height: '60vh' }}>{slide}</Paper>)}
      </Slider>
    </Backdrop>
  </>
}
