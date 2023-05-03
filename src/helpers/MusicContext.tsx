import React, { useState, createContext, useContext } from "react";
import { Howl } from "howler";

const MusicContext = createContext<any>(null);

export const useMusic = () => useContext(MusicContext);

export function MusicProvider({ children }) {
  const [music, setMusic] = useState<any>(null);

  const startMusic = () => {
    const newMusic: any = new Howl({
      src: ["/sounds/SiteMusicLoop.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.1,
    });
    newMusic.play();

    setMusic(newMusic);
  };

  const stopMusic = () => {
    music.stop();
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
