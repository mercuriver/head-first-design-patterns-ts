import BasePizza from "./BasePizza";

import { PIZZA_STYLE, PIZZA_TYPE, pizzaTypeName } from "../../../index.meta";

class ClamPizza extends BasePizza {
  constructor() {
    super({
      name: `${pizzaTypeName[PIZZA_STYLE.NEW_YORK][PIZZA_TYPE.CLAM]}`,
      toppings: ["잘게 썬 레지아노 치즈", "롱아일랜드 사운드의 신선한 조개"],
    });
  }
}

export default ClamPizza;
