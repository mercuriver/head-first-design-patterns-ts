import Pizza from "./Pizza";
import type { PizzeType } from "../index.meta";

abstract class PizzaStore {
  abstract createPizza(type: PizzeType): Pizza;

  orderPizza(type: PizzeType): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
