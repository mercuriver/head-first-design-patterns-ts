import Beverage from "./Beverage";

abstract class CondimentDecorator extends Beverage {
  #beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.#beverage = beverage;
  }

  cost(): number {
    return this.#beverage.cost();
  }
}

export default CondimentDecorator;
