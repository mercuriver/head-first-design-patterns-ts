/**
 * 멀티스레드 환경에서 발생하는 문제를 해결하기 위한 초기화 시점에서 인스턴스를 미리 생성하는 방식
 */

class Singleton {
  static #uniqueInstance: Singleton = new Singleton();

  private constructor() {}

  static getInstance(): Singleton {
    return this.#uniqueInstance;
  }
}

export default Singleton;
