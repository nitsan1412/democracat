import React, { useState, createContext, useContext } from "react";

import { useForceUpdate } from "./ForceUpdate";
import Game  from "../logic/Game";
import CharacterManager from "../logic/CharacterManager";
import { Rule } from "../logic/Rule";

const GameContext = createContext<any>(null);

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
  const forceUpdate = useForceUpdate();
  const [game, setGame] = useState<any>(new Game());
  const [intervalHandler, setIntervalHandler] = useState<any>(undefined);

  const searchParams = new URLSearchParams(window.location.search);

  const start = () => {
    const game = getGameFromURL();
    setGame(game);
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

  const changeGameSounds=()=>{
    localStorage.setItem("isGameMuted", String(!game.isGameMuted));
    game.isGameMuted = !game.isGameMuted
  }

  const cancel = () => {
    clearInterval(intervalHandler);
    setIntervalHandler(undefined);
    setGame(undefined);
    forceUpdate();
  };

  const getGameFromURL = () => {
    return new Game(
      Number(searchParams.get("speed") || Game.INITIAL_SPEED),
      Number(searchParams.get("duration") || Game.DURATION),
      Number(searchParams.get("charachterAdditionChance") || CharacterManager.CHARACTER_ADDITION_CHANCE)
    );
  };

  return (
    <GameContext.Provider
      value={{
        game,
        start,
        cancel,
        chooseRule,
        declineRule,
        changeGameSounds
      }}>
      {children}
    </GameContext.Provider>
  );
}
