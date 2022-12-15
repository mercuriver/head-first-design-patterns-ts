class Light {
  #location: string;
  #level: number;

  constructor(location: string) {
    this.#location = location;
  }

  on(): void {
    this.#level = 100;
    console.log("Light is on");
  }

  off(): void {
    this.#level = 0;
    console.log("Light is off");
  }

  dim(level: number): void {
    this.#level = level;

    if (level == 0) {
      this.off();
    } else {
      console.log("Light is dimmed to " + level + "%");
    }
  }

  get level() {
    return this.#level;
  }
}

export default Light;
