import Pizza from "../Pizza";
import PizzaStore from "../PizzaStore";
import {
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStyleVeggiePizza,
  NYStylePepperoniPizza,
} from "../styles/ny";

import { PIZZA_TYPE, type PizzaType } from "../../index.meta";

class NYPizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    if (type === PIZZA_TYPE.CHEESE) {
      return new NYStyleCheesePizza();
    }
    if (type === PIZZA_TYPE.CLAM) {
      return new NYStyleClamPizza();
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      return new NYStyleVeggiePizza();
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      return new NYStylePepperoniPizza();
    }
    return null;
  }
}

export default NYPizzaStore;
