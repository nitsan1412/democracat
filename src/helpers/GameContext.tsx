import { useState, createContext, useContext, useEffect } from "react";
import React from "react";
import { useForceUpdate } from "./ForceUpdate";
import Game from "../logic/Game";
import CharacterManager from "../logic/CharacterManager";
import { Rule } from "../logic/Rule";

const GameContext = createContext(null);

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
  const forceUpdate = useForceUpdate();
  const [game, setGame] = useState(new Game());
  const [intervalHandler, setIntervalHandler] = useState(undefined);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const speed = Number(params.get("speed") || 1);
    const duration = Number(params.get("duration") || Game.DURATION);
    const charachterAdditionChance = Number(
      params.get("charachter-addition-chance") ||
        CharacterManager.CHARACTER_ADDITION_CHANCE
    );

    setGame(new Game(speed, duration, charachterAdditionChance));
  }, []);

  const newGame = () => {
    setGame(new Game());
  };

  const start = () => {
    game.start();
    const interval = setInterval(() => {
      game.step();
      forceUpdate();
      if (game.status === "over") {
        clearInterval(interval);
      }
    }, Game.STEP * 1000);
    setIntervalHandler(interval);
  };

  const chooseRule = (rule: Rule) => {
    game.chooseRule(rule);
    forceUpdate();
  };

  const declineRule = (rule: Rule) => {
    game.ruleManager.declineRule(rule);
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
      }}>
      {children}
    </GameContext.Provider>
  );
}
