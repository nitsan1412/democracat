import React, { useState, createContext, useContext } from "react";
import { Howl } from "howler";

const MusicContext = createContext<any>(null);

export const useMusic = () => useContext(MusicContext);

export function MusicProvider({ children }) {
  const [music, setMusic] = useState<any>(null);

  const startMusic = () => {
    setMusic(
      new Howl({
        src: ["/sounds/SiteMusicLoop.mp3"],
        autoplay: true,
        loop: true,
        volume: 0.1,
      })
    );
  };

  const stopMusic = () => {
    music.pause();
    music.unload();
    setMusic(null);
  };

  return (
    <MusicContext.Provider
      value={{
        stopMusic,
        startMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
