import { Howl } from "howler";

export function playSound(name: string, isGameMuted: boolean) {
  if (isGameMuted) return "";
  let config = SOUNDS[name];
  if (Array.isArray(config)) {
    config = config[Math.floor(Math.random() * config.length)];
  }
  const howl: any = new Howl({ ...config });
  return howl.play();
}

const SOUNDS = {
  meow: [
    { src: ["/sounds/CAT-00.mp3"], volume: 0.2 },
    { src: ["/sounds/CAT-01.mp3"], volume: 0.2 },
    { src: ["/sounds/CAT-02.mp3"], volume: 0.2 },
    { src: ["/sounds/CAT-03.mp3"], volume: 0.2 },
    { src: ["/sounds/CAT-04.mp3"], volume: 0.2 },
    { src: ["/sounds/CAT-05.mp3"], volume: 0.2 },
  ],
  win: { src: ["/sounds/oneCatWin.mp3"], volume: 0.2 },
  lose: { src: ["/sounds/oneCatLose.mp3"], volume: 0.2 },
  newLaw: [
    { src: ["/sounds/NewLaw.wav"], volume: 0.2 },
    { src: ["/sounds/NewLaw-01.wav"], volume: 0.2 },
    { src: ["/sounds/NewLaw-02.wav"], volume: 0.2 },
  ],
  newHighScore: [
    { src: ["/sounds/NewHighScore.mp3"], volume: 0.2 },
    { src: ["/sounds/NewHighScore-01.mp3"], volume: 0.2 },
  ],
  declineLaw: { src: ["/sounds/DecliningALaw.mp3"], volume: 0.1 },
  chosenLaw: { src: ["/sounds/ChoosingALaw-01.mp3"], volume: 0.2 },
  muted: { src: [""] },
};
