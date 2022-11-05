import Pizza from "../Pizza";
import PizzaStore from "../PizzaStore";

import type { PizzaType } from "../../index.meta";

class NYPizzaStore extends PizzaStore {
  createPizza(type: PizzaType): Pizza {
    return null;
  }
}

export default NYPizzaStore;
