class PopcornPopper {
  #description: string;
  #isOn: boolean;

  constructor(description: string) {
    this.#description = description;
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

  pop(): void {
    console.log(this.#description + " popping popcorn!");
  }

  toString(): string {
    return this.#description;
  }

  get isOn(): boolean {
    return this.#isOn;
  }
}

export default PopcornPopper;
