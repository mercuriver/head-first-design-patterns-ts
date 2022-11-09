import BasePizza from "./BasePizza";

import { PIZZA_STYLE, PIZZA_TYPE, pizzaTypeName } from "../../index.meta";

class VeggiePizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.VEGGIE]}`,
      toppings: ["잘게 썬 레지아노 치즈", "마늘", "양파", "버섯", "레드 페퍼"],
    });
  }
}

export default VeggiePizza;
