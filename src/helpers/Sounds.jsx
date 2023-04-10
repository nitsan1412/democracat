import { Howl } from "howler";

export function playSound(name) {
  let config = SOUNDS[name];
  if (Array.isArray(config)) {
    config = config[Math.floor(Math.random() * config.length)];
  }
  const howl = new Howl(config);
  return howl.play();
}

const SOUNDS = {
  meow: [
    { src: ["/sounds/CAT-00.mp3"] },
    { src: ["/sounds/CAT-01.mp3"] },
    { src: ["/sounds/CAT-02.mp3"] },
    { src: ["/sounds/CAT-03.mp3"] },
    { src: ["/sounds/CAT-04.mp3"] },
    { src: ["/sounds/CAT-05.mp3"] },
  ],
  purr: { src: ["/sounds/CAT PURR.mp3"] },
  donkey: [{ src: ["/sounds/DONKEY.mp3"] }, { src: ["/sounds/DONKEY-01.mp3"] }],
  win: { src: ["/sounds/ONE CAT WIN.mp3"] },
  lose: { src: ["/sounds/ONE CAT LOSE.mp3"] },
};
