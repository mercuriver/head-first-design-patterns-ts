class Screen {
  #description: string;
  #isUp: boolean;

  constructor(description: string) {
    this.#description = description;
    this.#isUp = true;
  }

  up(): void {
    console.log(this.#description + " going up");
    this.#isUp = true;
  }

  down(): void {
    console.log(this.#description + " going down");
    this.#isUp = false;
  }

  toString(): string {
    return this.#description;
  }

  get isUp(): boolean {
    return this.#isUp;
  }
}

export default Screen;
