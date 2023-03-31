import { useState, createContext, useContext, useEffect } from "react";

import { useForceUpdate } from "./ForceUpdate";
import Game from "../logic/Game";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
  const forceUpdate = useForceUpdate();
  const [game, setGame] = useState(new Game());
  const [intervalHandler, setIntervalHandler] = useState(undefined);

  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    let speed = Number(params.get("speed"));
    let duration = Number(params.get("duration"));
    let charachterAdditionChance = Number(
      params.get("charachter-addition-chance")
    );

    setGame(new Game(speed, duration, charachterAdditionChance));
  }, []);

  const newGame = () => {
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

  return (
    <GameContext.Provider
      value={{
        game,
        newGame,
        start,
        cancel,
        chooseRule,
        declineRule,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
