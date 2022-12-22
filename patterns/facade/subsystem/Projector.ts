import StreamingPlayer from "./StreamingPlayer";

class Projector {
  #description: String;
  #player: StreamingPlayer;
  #isOn: boolean;

  constructor(description: String, player: StreamingPlayer) {
    this.#description = description;
    this.#player = player;
    this.#isOn = false;
  }

  on(): void {
    console.log(this.#description + " on");
    this.#isOn = true;
  }

  off(): void {
    console.log(this.#description + " off");
    this.#isOn = false;
  }

  wideScreenMode(): void {
    console.log(this.#description + " in widescreen mode (16x9 aspect ratio)");
  }

  tvMode(): void {
    console.log(this.#description + " in tv mode (4x3 aspect ratio)");
  }

  toString(): String {
    return this.#description;
  }

  get isOn(): boolean {
    return this.#isOn;
  }
}

export default Projector;
