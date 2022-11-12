class Singleton {
  static #uniqueInstance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (this.#uniqueInstance == null) {
      this.#uniqueInstance = new Singleton();
    }
    return this.#uniqueInstance;
  }
}

export default Singleton;
