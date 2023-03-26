import { useState, createContext, useContext } from "react";

import { useForceUpdate } from "./ForceUpdate";
import Game from "../logic/Game";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
  const forceUpdate = useForceUpdate();
  const [game, setGame] = useState(new Game());
  const [intervalHandler, setIntervalHandler] = useState(undefined);

  const newGame = () => {
    console.log("in newGame in context");
    setGame(new Game());
  };

  const start = () => {
    game.start();
    let interval = setInterval(() => {
      game.step();
      forceUpdate();
      if (game.status === "over") {
        clearInterval(interval);
      }
    }, Game.STEP * 1000);
    setIntervalHandler(interval);
  };

  const chooseRule = (rule) => {
    game.chooseRule(rule);
    forceUpdate();
  };

  const declineRule = (rule) => {
    game.declineRule(rule);
    forceUpdate();
  };

  const cancel = () => {
    clearInterval(intervalHandler);
    setIntervalHandler(undefined);
    setGame(new Game());
    forceUpdate();
  };

  const pauseGame = () => {
    game.pause();
  };

  const resumeGame = () => {
    game.resume();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        newGame,
        start,
        cancel,
        chooseRule,
        declineRule,
        pauseGame,
        resumeGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
