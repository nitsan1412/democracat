import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ShareIcon from '@mui/icons-material/Share'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Rule from './Game/Rule'

import { useGame } from '../helpers/GameContext'

export default function StartGameMenu () {
  const { game } = useGame()

  return <Stack alignItems='center' sx={{ padding: '1rem', gap: '1rem', '.slick-list': { width: '100vw', margin: '1rem -2rem' }, '.slick-slide': { padding: '0.5rem 1rem' }, '.slick-arrow': { zIndex: 2, '&::before': { color: '#000000'} } }}>
    <Typography variant='h2'>כל הכבוד!</Typography>
    <Typography variant='h3'>{game.score} נקודות!</Typography>
    <Slider slidesToShow={1} slidesToScroll={1}>
      {game.chosenRules.map(rule => <Rule rule={rule} noChoice />)}
    </Slider>
    <Stack>
      {Object.entries(game.charactersByType).map(([characterType, characters]) => <Stack>
      </Stack>)}
    </Stack>
    <Button variant='contained' fullWidth startIcon={<ShareIcon sx={{ marginRight: '-8px', marginLeft: '8px' }} />}>Share</Button>
  </Stack>
}
