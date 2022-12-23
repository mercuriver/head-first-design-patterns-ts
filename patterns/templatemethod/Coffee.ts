import CaffeineBeverage from "./CaffeineBeverage";
import { coffee } from "./index.meta";

class Coffee extends CaffeineBeverage {
  #needCondiments: boolean;

  constructor(needCondiments: boolean) {
    super();
    this.#needCondiments = needCondiments;
  }

  brew(): string {
    return coffee.brew;
  }

  addCondiments(): string {
    return coffee.condiments;
  }

  customerWantsCondiments(): boolean {
    return this.#needCondiments;
  }
}

export default Coffee;
