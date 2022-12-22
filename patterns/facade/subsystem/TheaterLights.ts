class TheaterLights {
  #description: string;
  #level: number;

  constructor(description: string) {
    this.#description = description;
    this.#level = 0;
  }

  on(): void {
    console.log(this.#description + " on");
    this.#level = 100;
  }

  off(): void {
    console.log(this.#description + " off");
    this.#level = 0;
  }

  dim(level: number): void {
    console.log(this.#description + " dimming to " + level + "%");
    this.#level = level;
  }

  toString(): string {
    return this.#description;
  }

  get level(): number {
    return this.#level;
  }
}

export default TheaterLights;
