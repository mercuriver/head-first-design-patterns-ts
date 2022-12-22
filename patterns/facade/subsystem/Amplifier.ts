import StreamingPlayer from "./StreamingPlayer";
import Tuner from "./Tuner";

class Amplifier {
  #tuner: Tuner;
  #player: StreamingPlayer;

  #description: string;
  #volumn: number;
  #isOn: boolean;

  constructor(description: string) {
    this.#description = description;
    this.#volumn = 0;
    this.#isOn = false;
  }

  on(): void {
    console.log(this.#description + " on");
    this.#isOn = true;
  }

  off(): void {
    console.log(this.#description + " off");
    this.#volumn = 0;
    this.#isOn = false;
  }

  setStereoSound(): void {
    console.log(this.#description + " stereo mode on");
  }

  setSurroundSound(): void {
    console.log(
      this.#description + " surround sound on (5 speakers, 1 subwoofer)"
    );
  }

  setVolume(level: number): void {
    console.log(this.#description + " setting volume to " + level);
    this.#volumn = level;
  }

  setTuner(tuner: Tuner): void {
    console.log(this.#description + " setting tuner to " + this.#player);
    this.#tuner = tuner;
  }

  setStreamingPlayer(player: StreamingPlayer): void {
    console.log(this.#description + " setting Streaming player to " + player);
    this.#player = player;
  }

  toString(): string {
    return this.#description;
  }

  get volumn(): number {
    return this.#volumn;
  }

  get isOn(): boolean {
    return this.#isOn;
  }
}

export default Amplifier;
