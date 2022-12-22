class TheaterLights {
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

  dim(level: number): void {
    console.log(this.#description + " dimming to " + level + "%");
  }

  toString(): string {
    return this.#description;
  }
}

export default TheaterLights;
