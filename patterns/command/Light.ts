class Light {
  #location: string;
  #level: number;

  constructor(location: string) {
    this.#location = location;
    this.#level = 0;
  }

  on(): void {
    this.#level = 100;
    console.log(`[${this.#location}] Light is on`);
  }

  off(): void {
    this.#level = 0;
    console.log(`[${this.#location}] Light is off`);
  }

  dim(level: number): void {
    this.#level = level;

    if (level == 0) {
      this.off();
    } else {
      console.log(`[${this.#location}] Light is dimmed to ${level}%`);
    }
  }

  get level() {
    return this.#level;
  }
}

export default Light;
