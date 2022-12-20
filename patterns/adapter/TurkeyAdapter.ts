import Duck from "./interfaces/Duck";
import Turkey from "./interfaces/Turkey";

class TurkeyAdapter implements Duck {
  #turkey;
  constructor(turkey: Turkey) {
    this.#turkey = turkey;
  }
  quack(): string {
    return this.#turkey.gobble();
  }
  fly(): string {
    return this.#turkey.fly();
  }
}

export default TurkeyAdapter;
