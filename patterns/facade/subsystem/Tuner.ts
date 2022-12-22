import Amplifier from "./Amplifier";

class Tuner {
  #description: string;
  #amplifier: Amplifier;
  #frequency: number;

  constructor(description: string, amplifier: Amplifier) {
    this.#description = description;
    this.#amplifier = amplifier;
  }

  on(): void {
    console.log(this.#description + " on");
  }

  off(): void {
    console.log(this.#description + " off");
  }

  setFrequency(frequency: number): void {
    console.log(this.#description + " setting frequency to " + frequency);
    this.#frequency = frequency;
  }

  setAm(): void {
    console.log(this.#description + " setting AM mode");
  }

  setFm(): void {
    console.log(this.#description + " setting FM mode");
  }

  toString(): string {
    return this.#description;
  }
}

export default Tuner;
