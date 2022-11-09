import BasePizza from "./BasePizza";

import { PIZZA_STYLE, PIZZA_TYPE, pizzaTypeName } from "../../../index.meta";

class CheesePizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName[PIZZA_STYLE.CHICAGO][PIZZA_TYPE.CHEESE]}`,
      toppings: ["슈레드 모짜렐라 치즈"],
    });
  }
}

export default CheesePizza;
