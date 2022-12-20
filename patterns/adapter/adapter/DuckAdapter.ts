import Duck from "../interfaces/Duck";
import Turkey from "../interfaces/Turkey";

class DuckAdapter implements Turkey {
  #duck;
  constructor(duck: Duck) {
    this.#duck = duck;
  }
  gobble(): string {
    return this.#duck.quack();
  }
  fly(): string {
    return this.#duck.fly();
  }
}

export default DuckAdapter;
