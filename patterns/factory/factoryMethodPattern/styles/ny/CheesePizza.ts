import BasePizza from "./BasePizza";

import { pizzaTypeName } from "../../../index.meta";

class CheesePizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName.Cheese}`,
      toppings: ["잘게 썬 레지아노 치즈"],
    });
  }
}

export default CheesePizza;
