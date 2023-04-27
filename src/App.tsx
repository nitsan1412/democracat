import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { GameProvider } from "./helpers/GameContext";
import ThemeProvider from "./helpers/Theme";
import { Navigate } from "./helpers/SmartNavigate";

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
            <Route path="/shared" element={<Navigate to="/" keepParams />} />
            <Route
              path="/regame"
              element={<Navigate to="/game" keepParams />}
            />
            <Route path="/*" element={<Navigate to="/" keepParams />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </ThemeProvider>
  );
}
