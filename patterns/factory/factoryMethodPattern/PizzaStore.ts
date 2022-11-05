import Pizza from "./Pizza";
import type { PizzaType } from "../index.meta";

abstract class PizzaStore {
  abstract createPizza(type: PizzaType): Pizza;

  orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
