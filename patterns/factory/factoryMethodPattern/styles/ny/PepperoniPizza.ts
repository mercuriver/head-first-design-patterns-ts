import BasePizza from "./BasePizza";

import { PIZZA_STYLE, PIZZA_TYPE, pizzaTypeName } from "../../index.meta";

class PepperoniPizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.PEPPERONI]}`,
      toppings: [
        "잘게 썬 레지아노 치즈",
        "얇게 썬 페퍼로니",
        "마늘",
        "양파",
        "버섯",
        "레드 페퍼",
      ],
    });
  }
}

export default PepperoniPizza;
