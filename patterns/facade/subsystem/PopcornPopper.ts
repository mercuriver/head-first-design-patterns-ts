class PopcornPopper {
  #description: string;

  constructor(description: string) {
    this.#description = description;
  }

  on(): void {
    console.log(this.#description + " on");
  }

  off(): void {
    console.log(this.#description + " off");
  }

  pop(): void {
    console.log(this.#description + " popping popcorn!");
  }

  toString(): string {
    return this.#description;
  }
}

export default PopcornPopper;
