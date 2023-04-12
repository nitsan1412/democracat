import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { GameProvider } from "./helpers/GameContext";
import ThemeProvider from "./helpers/Theme";

import Home from "./components/Home";
import Summary from "./components/Summary";
import Game from "./components/Game";

export default function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/summery" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </ThemeProvider>
  );
}
