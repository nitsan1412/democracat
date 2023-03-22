import './App.scss'

import { GameProvider } from './helpers/GameContext'
import ThemeProvider from './helpers/Theme'

import Menu from './components/Menu'
import Main from './components/Main'

export default function App() {
  return <ThemeProvider>
    <GameProvider>
      <Menu/>
      <Main/>
    </GameProvider>
  </ThemeProvider>
}
