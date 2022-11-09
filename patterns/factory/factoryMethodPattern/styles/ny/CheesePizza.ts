import BasePizza from "./BasePizza";

import { PIZZA_STYLE, PIZZA_TYPE, pizzaTypeName } from "../../../index.meta";

class CheesePizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.CHEESE]}`,
      toppings: ["잘게 썬 레지아노 치즈"],
    });
  }
}

export default CheesePizza;
