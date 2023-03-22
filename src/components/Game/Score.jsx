import Typography from '@mui/material/Typography'

import { useGame } from '../../helpers/GameContext'

export default function Score () {
  const { game } = useGame()
  return <Typography sx={Score.styles}>{game.score}</Typography>
}

Score.styles = {
  position: 'absolute',
  top: 0,
  right: 0,
  height: '3rem',
  lineHeight: '3rem',
  fontSize: '1.2rem',
  color: 'white',
  paddingRight: '1rem'
}
