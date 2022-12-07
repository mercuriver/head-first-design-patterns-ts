import Pizza from "./pizza/Pizza";
import { CheesePizza, ClamPizza, VeggiePizza, PepperoniPizza } from "./pizza";

import PizzaIngredientFactory from "./ingredientFactory/PizzaIngredientFactory";

import { type PizzaType, PIZZA_TYPE } from "../index.meta";

class PizzaStore {
  createPizza(factory: PizzaIngredientFactory, type: PizzaType): Pizza {
    if (type === PIZZA_TYPE.CHEESE) {
      return new CheesePizza(factory);
    }
    if (type === PIZZA_TYPE.CLAM) {
      return new ClamPizza(factory);
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      return new VeggiePizza(factory);
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      return new PepperoniPizza(factory);
    }

    return null;
  }

  orderPizza(factory: PizzaIngredientFactory, type: PizzaType): Pizza {
    const pizza = this.createPizza(factory, type);

    console.log(`\n\n[제작 요청: ${pizza.name}]`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

export default PizzaStore;
