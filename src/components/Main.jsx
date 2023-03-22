import { useGame } from '../helpers/GameContext'
import StartGameMenu from './StartGameMenu'
import Game from './Game'
import GameSummary from './GameSummary'

const COMPONENTS = {
  pending: StartGameMenu,
  running: Game,
  over: GameSummary
}

export default function Main () {
  const { game } = useGame()
  const CurrentComponent = COMPONENTS[game.status]
  return <CurrentComponent />
}
