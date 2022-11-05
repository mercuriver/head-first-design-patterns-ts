import Pizza from "../Pizza";
import PizzaStore from "../PizzaStore";

import type { PizzeType } from "../../index.meta";

class NYPizzaStore extends PizzaStore {
  createPizza(type: PizzeType): Pizza {
    return null;
  }
}

export default NYPizzaStore;
