import Amplifier from "./Amplifier";

class StreamingPlayer {
  #description: string;
  #currentChapter: number;
  #amplifier: Amplifier;
  #movie: string;

  #isOn: boolean;

  constructor(description: string, amplifier: Amplifier) {
    this.#description = description;
    this.#amplifier = amplifier;
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

  // method overloading
  // https://stackoverflow.com/questions/31810881/typescript-overloading-class-methods-same-return-type-different-parameters
  play(movie: string): void;
  play(chapter: number): void;
  play(movieOrChapter: string | number): void {
    if (typeof movieOrChapter === "string") {
      this.#movie = movieOrChapter;
      this.#currentChapter = 0;
      console.log(this.#description + ' playing "' + movieOrChapter + '"');
    } else {
      if (this.#movie == null) {
        console.log(
          this.#description +
            " can't play chapter " +
            movieOrChapter +
            " no movie selected"
        );
      } else {
        this.#currentChapter = movieOrChapter;
        console.log(
          this.#description +
            " playing chapter " +
            this.#currentChapter +
            ' of "' +
            this.#movie +
            '"'
        );
      }
    }
  }

  stop(): void {
    this.#currentChapter = 0;
    console.log(this.#description + ' stopped "' + this.#movie + '"');
  }

  pause(): void {
    console.log(this.#description + ' paused "' + this.#movie + '"');
  }

  setTwoChannelAudio(): void {
    console.log(this.#description + " set two channel audio");
  }

  setSurroundAudio(): void {
    console.log(this.#description + " set surround audio");
  }

  toString(): string {
    return this.#description;
  }

  get isOn(): boolean {
    return this.#isOn;
  }
}

export default StreamingPlayer;
