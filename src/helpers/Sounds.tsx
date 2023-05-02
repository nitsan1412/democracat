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
    { src: ["/sounds/CAT-00.mp3"], volume: 0.5 },
    { src: ["/sounds/CAT-01.mp3"], volume: 0.5 },
    { src: ["/sounds/CAT-02.mp3"], volume: 0.5 },
    { src: ["/sounds/CAT-03.mp3"], volume: 0.5 },
    { src: ["/sounds/CAT-04.mp3"], volume: 0.5 },
    { src: ["/sounds/CAT-05.mp3"], volume: 0.5 },
  ],
  win: { src: ["/sounds/oneCatWin.mp3"], volume: 0.5 },
  lose: { src: ["/sounds/oneCatLose.mp3"], volume: 0.5 },
  whenReachinCouch: {
    src: [
      { src: ["/sounds/WhenReachingCouchMiew_.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-01.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-02.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-03.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-04.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-05.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-06.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-07.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-08.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-09.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-10.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-11.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-12.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-13.wav"], volume: 0.5 },
      { src: ["/sounds/WhenReachingCouchMiew_-14.wav"], volume: 0.5 },
    ],
  },
  newLaw: [
    { src: ["/sounds/NewLaw.wav"], volume: 0.5 },
    { src: ["/sounds/NewLaw-01.wav"], volume: 0.5 },
    { src: ["/sounds/NewLaw-02.wav"], volume: 0.5 },
  ],
  newHighScore: [
    { src: ["/sounds/NewHighScore.mp3"], volume: 0.5 },
    { src: ["/sounds/NewHighScore-01.mp3"], volume: 0.5 },
  ],
  declineLaw: [
    { src: ["/sounds/DecliningALaw.mp3"], volume: 0.5 },
    { src: ["/sounds/DecliningALaw-01.mp3"], volume: 0.5 },
  ],
  chosenLaw: [
    { src: ["/sounds/ChoosingALaw.mp3"], volume: 0.5 },
    { src: ["/sounds/ChoosingALaw-01.mp3"], volume: 0.5 },
  ],
  muted: { src: [""] },
 
};


