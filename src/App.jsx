import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
            <Route path="/summary" element={<Summary />} />
            <Route path="/shared" element={<Navigate to="/" />} />
            <Route path="/regame" element={<Navigate to="/game" />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </ThemeProvider>
  );
}
