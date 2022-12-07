import Pizza from "./pizza/Pizza";
import { CheesePizza, ClamPizza, VeggiePizza, PepperoniPizza } from "./pizza";

import PizzaIngredientFactory from "../ingredientFactory/PizzaIngredientFactory";

import {
  type PizzaType,
  PIZZA_TYPE,
  pizzaStyleName,
  pizzaTypeName,
} from "../../index.meta";

class PizzaStore {
  createPizza(factory: PizzaIngredientFactory, type: PizzaType): Pizza {
    let pizza: Pizza;

    if (type === PIZZA_TYPE.CHEESE) {
      pizza = new CheesePizza(factory);
      pizza.name = `${pizzaStyleName[factory.style]} ${
        pizzaTypeName[factory.style][PIZZA_TYPE.CHEESE]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.CLAM) {
      pizza = new ClamPizza(factory);
      pizza.name = `${pizzaStyleName[factory.style]} ${
        pizzaTypeName[factory.style][PIZZA_TYPE.CLAM]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      pizza = new VeggiePizza(factory);
      pizza.name = `${pizzaStyleName[factory.style]} ${
        pizzaTypeName[factory.style][PIZZA_TYPE.VEGGIE]
      }`;
      return pizza;
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      pizza = new PepperoniPizza(factory);
      pizza.name = `${pizzaStyleName[factory.style]} ${
        pizzaTypeName[factory.style][PIZZA_TYPE.PEPPERONI]
      }`;
      return pizza;
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
