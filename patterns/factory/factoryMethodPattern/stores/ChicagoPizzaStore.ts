import Pizza from "../Pizza";
import PizzaStore from "../PizzaStore";
import {
  ChicagoStyleCheesePizza,
  ChicagoStyleClamPizza,
  ChicagoStyleVeggiePizza,
  ChicagoStylePepperoniPizza,
} from "../styles/chicago";

import { PIZZA_TYPE, type PizzaType } from "../../index.meta";

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    if (type === PIZZA_TYPE.CHEESE) {
      return new ChicagoStyleCheesePizza();
    }
    if (type === PIZZA_TYPE.CLAM) {
      return new ChicagoStyleClamPizza();
    }
    if (type === PIZZA_TYPE.VEGGIE) {
      return new ChicagoStyleVeggiePizza();
    }
    if (type === PIZZA_TYPE.PEPPERONI) {
      return new ChicagoStylePepperoniPizza();
    }
    return null;
  }
}

export default ChicagoPizzaStore;
