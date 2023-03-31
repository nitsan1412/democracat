import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { GameProvider } from "./helpers/GameContext";
import ThemeProvider from "./helpers/Theme";

import StartGameMenu from "./components/StartGameMenu";
import GameSummary from "./components/GameSummary";
import Game from "./components/Game";

export default function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartGameMenu />} />
            <Route path="/game" element={<Game />} />
            <Route path="/summery" element={<GameSummary />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </ThemeProvider>
  );
}
