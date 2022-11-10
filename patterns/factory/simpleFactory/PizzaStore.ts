import Pizza from "./pizza/Pizza";
import SimpleFactory from "./SimpleFactory";
import type { PizzaType } from "../index.meta";

class PizzaStore {
  #factory: SimpleFactory;

  constructor(factory: SimpleFactory) {
    this.#factory = factory;
  }

  orderPizza(type: PizzaType): Pizza {
    const pizza = this.#factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
