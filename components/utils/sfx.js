import { Howl, Howler } from "howler";

const rmg = (arr) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

// fuente de sonidos
const source = ["sfx/1.ogg"];

// chops de sonidos
const library = {
  tap: [41900, 2],
  tap1: [42160, 2],
  tap2: [41645, 2],
  tap3: [42620, 2],
};
class Sfx {
  constructor() {
    this.source = source;
    this.library = library;
    this.player = {
      sound: new Howl({
        src: this.source,
        sprite: this.library,
        html5: true,
        preload: true,
      }),
    };
    this.play = (sound) => {
      Howler.stop();
      this.player.sound.play(sound);
    };
    this.stop = () => {
      Howler.stop();
    };

    // métodos que lanzan sonidos
    this.tap = async () => {
      const random = () =>
        new Promise((res) => {
          const a = rmg(["tap", "tap1", "tap2", "tap3"]);
          res(a);
        });
      const pick = await random();
      this.play(pick);
      console.log(`playing: ${pick}`);
    };
  }
}
const sfx = new Sfx();

export default sfx;
