/**
 * 멀티스레드 환경에서 발생하는 문제를 해결하기 위한 Double-Checked Locking 방식
 */

class Singleton {
  static #uniqueInstance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (this.#uniqueInstance == null) {
      const instance = new Singleton();
      if (this.#uniqueInstance == null) {
        this.#uniqueInstance = instance;
      }
    }
    return this.#uniqueInstance;
  }
}

export default Singleton;
