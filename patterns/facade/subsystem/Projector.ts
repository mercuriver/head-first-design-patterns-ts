import StreamingPlayer from "./StreamingPlayer";

class Projector {
  #description: String;
  #player: StreamingPlayer;

  constructor(description: String, player: StreamingPlayer) {
    this.#description = description;
    this.#player = player;
  }

  on(): void {
    console.log(this.#description + " on");
  }

  off(): void {
    console.log(this.#description + " off");
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
}

export default Projector;
