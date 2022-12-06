import Pizza from "../pizza/Pizza";
import { PizzaType } from "../../../index.meta";

abstract class PizzaStore {
  abstract createPizza(type: PizzaType): Pizza;

  orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);

    console.log(`\n\n[제작 요청: ${pizza.name}]`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;