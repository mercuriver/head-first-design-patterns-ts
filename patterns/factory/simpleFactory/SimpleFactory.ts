import Pizza from "./pizza/Pizza";
import { CheesePizza, ClamPizza, VeggiePizza, PepperoniPizza } from "./pizza";
import { type PizzaType, PIZZA_TYPE } from "../index.meta";

class SimpleFactory {
  createPizza(type: PizzaType): Pizza {
    if (type === PIZZA_TYPE.CHEESE) {
      return new CheesePizza();
    }
    if (type === PIZZA_TYPE.CLAM) {
      return new ClamPizza();
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      return new VeggiePizza();
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      return new PepperoniPizza();
    }
    return null;
  }
}

export default SimpleFactory;
