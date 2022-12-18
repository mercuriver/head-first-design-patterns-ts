class TV {
  #location: string;
  #channel: number;

  constructor(location: string) {
    this.#location = location;
    this.#channel = 0;
  }

  on(): void {
    console.log(
      `[${this.#location}] TV is on, current channel: ${this.#channel}`
    );
  }

  off(): void {
    console.log(`[${this.#location}] TV is off`);
  }

  setInputChannel() {
    this.#channel = 3;
    console.log(`[${this.#location}] TV channel is set for DVD`);
  }
}

export default TV;
