class Screen {
  #description: string;

  constructor(description: string) {
    this.#description = description;
  }

  up(): void {
    console.log(this.#description + " going up");
  }

  down(): void {
    console.log(this.#description + " going down");
  }

  toString(): string {
    return this.#description;
  }
}

export default Screen;
