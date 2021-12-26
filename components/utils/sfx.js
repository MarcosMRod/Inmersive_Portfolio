import { Howl, Howler } from "howler";

const pickRandomElement = (arr) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

class Sfx {
  constructor(source, library) {
    this.player = {
      sound: new Howl({
        src: source,
        sprite: library,
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
    this.tap = () => {
      const randomTap = pickRandomElement(["tap", "tap1", "tap2", "tap3"]);
      this.play(randomTap);
      console.log(`playing: ${randomTap}`);
    };
  }
}
const sfx = new Sfx();

export default Sfx;
